import { motion } from "framer-motion";
import { NeonCard } from "@/components/ui/neon-card";
import { 
  Eye, 
  Cpu, 
  FileCode, 
  UserCheck, 
  Wrench, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function AntiFallSection() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Monitor 24/7",
      desc: "Revisa de forma autónoma cada uno de tus workflows y reporta demoras o fallos de conexión cada hora.",
      icon: <Eye className="w-6 h-6 text-primary" />
    },
    {
      num: "02",
      title: "Diagnóstico IA",
      desc: "En caso de falla, una IA analiza logs y errores de API para resumirlos al instante en lenguaje humano claro.",
      icon: <Cpu className="w-6 h-6 text-secondary" />
    },
    {
      num: "03",
      title: "Propuesta de Fix",
      desc: "La IA escribe la corrección de código, actualiza el nodo de API o ajusta la ruta del workflow automáticamente.",
      icon: <FileCode className="w-6 h-6 text-primary" />
    },
    {
      num: "04",
      title: "Aprobación Humana",
      desc: "Recibes una notificación en tu Telegram o WhatsApp. Con un solo botón de 'Sí' o 'No', tú mantienes el control absoluto.",
      icon: <UserCheck className="w-6 h-6 text-secondary" />
    },
    {
      num: "05",
      title: "Auto-Aplicación",
      desc: "Al dar tu visto bueno, el parche se despliega automáticamente en caliente y la operación continúa sin interrupciones.",
      icon: <Wrench className="w-6 h-6 text-primary" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="anti-caidas" className="py-24 relative overflow-hidden bg-black/35 border-t border-b border-white/5 scroll-mt-20">
      {/* Visual background lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-secondary/5 rounded-full blur-[140px] -z-10 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm">
            <span className="text-secondary font-exo text-sm tracking-widest uppercase font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              El Factor IMAN
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white text-glow-secondary">
            Automatizaciones que se Cuidan Solas
          </h2>
          <p className="text-lg text-muted-foreground font-exo max-w-2xl mx-auto">
            Cualquier agencia te puede armar un flujo de trabajo. Nosotros construimos un sistema robusto con tecnología **Anti-Caídas** integrada.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 items-stretch mb-20"
        >
          {steps.map((step, idx) => (
            <motion.div key={step.num} variants={cardVariants} className="relative flex flex-col h-full">
              <NeonCard 
                glowColor={idx % 2 === 0 ? "primary" : "secondary"}
                className="bg-black/40 border-white/10 flex flex-col justify-between h-full p-6 relative z-10"
              >
                <div>
                  {/* Icon & Step Number */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      {step.icon}
                    </div>
                    <span className="font-orbitron font-bold text-sm text-muted-foreground/50 tracking-wider">
                      FASE {step.num}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-orbitron font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-exo text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </NeonCard>

              {/* Connecting Arrow for Desktop Layout */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                  <ArrowRight className="w-6 h-6 text-primary/30 group-hover:text-primary animate-pulse" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Core quote section */}
        <div className="max-w-4xl mx-auto">
          <NeonCard glowColor="primary" className="bg-gradient-to-r from-black/80 via-primary/5 to-black/80 border-primary/20 p-8 text-center relative overflow-hidden">
            {/* Ambient glows inside card */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            
            <p className="font-exo text-base md:text-lg italic text-white/95 leading-relaxed relative z-10">
              "Esto es lo que separa una automatización aficionada de un sistema operativo empresarial con IA. Mientras otras agencias entregan workflows y se van, **IMAN entrega un organismo digital que se vigila a sí mismo**."
            </p>
            <div className="mt-4 font-orbitron text-xs text-primary tracking-widest uppercase relative z-10">
              — Arquitectura Anti-Caídas Activa
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
}
