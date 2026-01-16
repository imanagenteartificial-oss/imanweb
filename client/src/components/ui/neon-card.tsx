import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NeonCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  glowColor?: "primary" | "secondary" | "none";
  children?: React.ReactNode;
}

const NeonCard = forwardRef<HTMLDivElement, NeonCardProps>(
  ({ className, glowColor = "primary", children, ...props }, ref) => {
    
    const glowStyles = {
      primary: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]",
      secondary: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(188,19,254,0.15)]",
      none: ""
    };

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -5 }}
        className={cn(
          "relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/10 transition-all duration-300 overflow-hidden group",
          glowStyles[glowColor],
          className
        )}
        {...props}
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-primary transition-colors" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-primary transition-colors" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors" />

        {children}
      </motion.div>
    );
  }
);

NeonCard.displayName = "NeonCard";

export { NeonCard };
