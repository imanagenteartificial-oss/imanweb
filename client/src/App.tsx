import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
<<<<<<< HEAD
import { PricingDetail } from "@/components/pricing-detail";
import { HowItWorksDetail } from "@/components/how-it-works-detail";
import { TestimonialsDetail } from "@/components/testimonials-detail";
import { DemoForm } from "@/components/demo-form";
import FluidCursor from "@/components/ui/FluidCursor";

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
=======

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
>>>>>>> 8ad28201ddd864850563e11a25b48ac7e5519105
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
<<<<<<< HEAD
        <FluidCursor />
=======
>>>>>>> 8ad28201ddd864850563e11a25b48ac7e5519105
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
