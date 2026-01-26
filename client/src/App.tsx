import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { PricingDetail } from "@/components/pricing-detail";
import { HowItWorksDetail } from "@/components/how-it-works-detail";
import { TestimonialsDetail } from "@/components/testimonials-detail";
import { DemoForm } from "@/components/demo-form";
import { TailedCursor } from "@/components/ui/tailed-cursor";

function Router() {
  return (
    <div className="min-h-screen relative font-sans antialiased text-foreground bg-background selection:bg-primary/20 selection:text-primary-foreground">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pricing-details" component={PricingDetail} />
        <Route path="/how-it-works-details" component={HowItWorksDetail} />
        <Route path="/testimonials-details" component={TestimonialsDetail} />
        <Route path="/demo" component={DemoForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TailedCursor
          baseThickness={30}
          colors={['hsl(190, 100%, 50%)', 'hsl(300, 100%, 50%)']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={true}
          enableShaderEffect={true}
        />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
