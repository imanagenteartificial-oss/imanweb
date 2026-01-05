import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NeonButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  glow?: boolean;
  children: React.ReactNode;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", glow = true, children, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-orbitron font-bold tracking-wider uppercase transition-all duration-300 rounded-md group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background cursor-pointer";
    
    const variants = {
      primary: "bg-transparent text-primary border border-primary hover:bg-primary/10 hover:text-white hover:border-primary/80",
      secondary: "bg-transparent text-secondary border border-secondary hover:bg-secondary/10 hover:text-white hover:border-secondary/80",
      outline: "bg-transparent text-foreground border border-muted hover:border-primary hover:text-primary"
    };

    const glowClass = glow 
      ? variant === "primary" 
        ? "shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]" 
        : variant === "secondary"
          ? "shadow-[0_0_20px_rgba(188,19,254,0.3)] hover:shadow-[0_0_30px_rgba(188,19,254,0.6)]"
          : ""
      : "";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], glowClass, className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2 text-center text-[16px]">{children}</span>
        {/* Animated background shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton };
