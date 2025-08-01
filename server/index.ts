import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

// 🔧 Updated: Import from renamed file (not conflicting with "vite" package)
import { setupVite, serveStatic, log } from "./viteHelpers";

// ✅ Vite package import (no conflict now)
import { createServer as createViteServer, createLogger } from "vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Check NODE_ENV instead of app.get("env") for better reliability
  const isProduction = process.env.NODE_ENV === "production";
  
  log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  log(`Running in ${isProduction ? 'production' : 'development'} mode`);

  // Only use Vite in development mode
  if (!isProduction) {
    log("Setting up Vite development server...");
    await setupVite(app, server);
  } else {
    log("Setting up static file serving for production...");
    serveStatic(app);
  }

  const port = process.env.PORT || 4001;
  server.listen(
    {
      port: Number(port),
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`Server listening on port ${port}`);
      log(`Visit: http://localhost:${port}`);
    }
  );
})();