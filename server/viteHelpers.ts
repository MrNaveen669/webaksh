import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  log("Initializing Vite development server...");
  
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  try {
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      customLogger: {
        ...viteLogger,
        error: (msg, options) => {
          viteLogger.error(msg, options);
          process.exit(1);
        },
      },
      server: serverOptions,
      appType: "custom",
    });

    app.use(vite.middlewares);
    
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;

      try {
        // Path to client template - adjusted for your project structure
        const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");
        
        log(`Looking for template at: ${clientTemplate}`);
        
        if (!fs.existsSync(clientTemplate)) {
          throw new Error(`Template not found at: ${clientTemplate}`);
        }

        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        template = template.replace(
          `src="/src/main.tsx"`,
          `src="/src/main.tsx?v=${nanoid()}"`,
        );
        
        const page = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        log(`Error serving ${url}: ${(e as Error).message}`);
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
    
    log("Vite development server setup complete");
  } catch (error) {
    log(`Failed to setup Vite: ${(error as Error).message}`);
    throw error;
  }
}

export function serveStatic(app: Express) {
  log("Setting up static file serving for production...");
  
  // Path to built client files - matches your vite.config.ts output
  const distPath = path.resolve(__dirname, "..", "dist", "client");
  
  log(`Looking for build directory at: ${distPath}`);

  if (!fs.existsSync(distPath)) {
    const errorMsg = `Could not find the build directory: ${distPath}. Make sure to run 'npm run build' first.`;
    log(errorMsg);
    throw new Error(errorMsg);
  }

  // Check if index.html exists
  const indexPath = path.resolve(distPath, "index.html");
  if (!fs.existsSync(indexPath)) {
    const errorMsg = `Could not find index.html at: ${indexPath}. Build may have failed.`;
    log(errorMsg);
    throw new Error(errorMsg);
  }

  // Serve static files from the build directory
  app.use(express.static(distPath, {
    maxAge: process.env.NODE_ENV === "production" ? "1y" : "0",
    etag: true,
  }));

  // Catch-all handler: send back React's index.html file for SPA routing
  app.use("*", (req, res) => {
    log(`Serving index.html for route: ${req.originalUrl}`);
    res.sendFile(indexPath);
  });
  
  log("Static file serving setup complete");
}