import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppFloat from "@/components/whatsapp-float";
import { ConsultationButton } from "@/components/consultation-button";
import { useGoogleAnalytics } from "@/lib/analytics";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Blog from "@/pages/Blog";

// Import service pages
import WebDevelopment from "@/pages/services/web-development";
import MobileAppDevelopment from "@/pages/services/mobile-development";
import SEOServices from "@/pages/services/seo";
import UIUXDesign from "@/pages/services/ui-ux-design";

function Router() {
  useGoogleAnalytics();
  
  return (
    <div>
      <WhatsAppFloat phone="+919131456765" />
      <ConsultationButton />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/web-development" component={WebDevelopment} />
        <Route path="/services/mobile-development" component={MobileAppDevelopment} />
        <Route path="/services/seo" component={SEOServices} />
        <Route path="/services/ui-ux-design" component={UIUXDesign} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
