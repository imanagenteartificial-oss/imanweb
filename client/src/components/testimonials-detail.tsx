import { NeonCard } from "@/components/ui/neon-card";
import { motion } from "framer-motion";
import { Building2, ShoppingBag, Dumbbell, Zap, Store, Heart, FerrisWheel, MonitorPlay, Ticket, GraduationCap } from "lucide-react";

export function TestimonialsDetail() {
  const clients = [
    { name: "LLANTICENTRO", icon: <Zap className="text-primary" />, category: "Automotriz" },
    { name: "SPAZIOS", icon: <Building2 className="text-secondary" />, category: "Inmobiliaria" },
    { name: "INFINITY", icon: <ShoppingBag className="text-primary" />, category: "Retail" },
    { name: "QUANTUME", icon: <MonitorPlay className="text-secondary" />, category: "Tecnología" },
    { name: "DYM", icon: <Dumbbell className="text-primary" />, category: "Fitness" },
    { name: "AMORANIMAL", icon: <Heart className="text-secondary" />, category: "Veterinaria" },
    { name: "MARIOS PARK", icon: <FerrisWheel className="text-primary" />, category: "Entretenimiento" },
    { name: "PUBLIMARK", icon: <Store className="text-secondary" />, category: "Marketing" },
    { name: "INOVA", icon: <Ticket className="text-primary" />, category: "Eventos" },
    { name: "COACHGROUP", icon: <GraduationCap className="text-secondary" />, category: "Escuela Online" },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1295],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <section id="testimonios-detalle" className="py-20 bg-black/40 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-primary font-exo text-sm tracking-widest uppercase font-bold">
            Confianza Absoluta
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
          Empresas que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Viven el Futuro
          </span>
        </h2>
        <p className="text-lg text-muted-foreground font-exo max-w-2xl mx-auto">
          Líderes de industria que ya han automatizado sus procesos y escalado sus resultados con nuestra tecnología.
        </p>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-primary/5 blur-[100px] -z-0 pointer-events-none" />

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex w-max">
          <motion.div
            className="flex gap-8 pr-8"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...clients, ...clients].map((client, index) => (
              <NeonCard 
                key={`${client.name}-${index}`}
                glowColor={index % 2 === 0 ? "primary" : "secondary"}
                className="w-64 flex flex-col items-center justify-center p-6 bg-black/60 backdrop-blur-md border-white/5 shrink-0 group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full">
                    {client.icon}
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-1 tracking-wide">{client.name}</h3>
                <span className="text-xs font-exo text-muted-foreground uppercase tracking-widest">{client.category}</span>
              </NeonCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
