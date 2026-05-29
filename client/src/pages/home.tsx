import { motion, useMotionValue, useSpring } from "framer-motion";
import { NeonButton } from "@/components/ui/neon-button";
import { NeonCard } from "@/components/ui/neon-card";
import { Switch } from "@/components/ui/switch";
import {
  Bot,
  Cpu,
  Zap,
  BarChart3,
  Clock,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { HlsVideo } from "@/components/ui/hls-video";
import brainImage from "@assets/generated_images/futuristic_neon_ai_brain_illustration.png";

import { HowItWorksDetail } from "@/components/how-it-works-detail";
import { TestimonialsDetail } from "@/components/testimonials-detail";
import { PricingDetail } from "@/components/pricing-detail";
import { DemoForm } from "@/components/demo-form";
import { ContactSection } from "@/components/sections/ContactSection";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { AntiFallSection } from "@/components/sections/AntiFallSection";
import { DiagnosticQuiz } from "@/components/sections/DiagnosticQuiz";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

function FluidCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-follower"
      style={{
        left: springX,
        top: springY,
      }}
    />
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <FluidCursor />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://wdylnfbjiysejkvdftgf.supabase.co/storage/v1/object/sign/varios/logo%20iman.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ZjI5ZDNmZS1hY2NlLTRiNzMtYjQyZi01MTk4ZGNjNGYzNmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2YXJpb3MvbG9nbyBpbWFuLmpwZWciLCJpYXQiOjE3NzQ0OTQwNjUsImV4cCI6MzMzMTA0OTQwNjV9.kPpCXalP5KIZraKsWkIN0fl823lTt7Osy4sSqxmDNbY"
              alt="IMAN AI Logo"
              className="w-12 h-12 rounded object-contain shadow-[0_0_15px_rgba(0,243,255,0.3)] bg-white/5 p-1"
            />
            <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              IMAN<span className="text-primary">AI</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Soluciones", "Cómo Funciona", "Testimonios", "Precios"].map((item) => (
              <a key={item} href={item === "Cómo Funciona" ? "#como-funciona-detalle" : item === "Testimonios" ? "#testimonios-detalle" : item === "Precios" ? "#precios-detalle" : `#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-exo text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                {item}
              </a>
            ))}
            <NeonButton
              variant="primary"
              className="px-6 py-2 h-auto text-sm"
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Iniciar Transformación
            </NeonButton>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-background border-b border-white/10"
          >
            <div className="flex flex-col p-4 gap-4">
              {["Soluciones", "Cómo Funciona", "Testimonios", "Precios"].map((item) => (
                <a key={item} href={item === "Cómo Funciona" ? "#como-funciona-detalle" : item === "Testimonios" ? "#testimonios-detalle" : item === "Precios" ? "#precios-detalle" : `#`} className="text-muted-foreground hover:text-primary py-2 font-exo uppercase">
                  {item}
                </a>
              ))}
              <NeonButton
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Iniciar Transformación
              </NeonButton>
            </div>
          </motion.div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-0">
        {/* Background Video Effect - full coverage */}
        <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none overflow-hidden">
          <HlsVideo
            src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay to keep text readable without blurring the video */}
        <div className="absolute inset-0 -z-15 bg-black/50 pointer-events-none" />
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 -z-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="text-primary font-exo text-sm tracking-widest uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Tecnología del Futuro Hoy
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="md:text-7xl font-orbitron font-bold mb-6 text-[28px] sm:text-[34px]">
              Automatizamos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient bg-300%">
                tu Negocio
              </span> <br />
              con IA 24/7
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-8 max-w-lg font-exo leading-relaxed">
              Libera el potencial humano delegando lo repetitivo a la inteligencia sintética. Eficiencia absoluta, sin pausas, sin errores.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <NeonButton
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Demo <ChevronRight className="ml-2 w-5 h-5" />
              </NeonButton>
              <NeonButton
                variant="primary"
                className="text-lg px-8 py-4"
                glow
                onClick={() => window.open("https://wdylnfbjiysejkvdftgf.supabase.co/storage/v1/object/sign/varios/SVID_20250718_122805_1%20(3).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ZjI5ZDNmZS1hY2NlLTRiNzMtYjQyZi01MTk4ZGNjNGYzNmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2YXJpb3MvU1ZJRF8yMDI1MDcxOF8xMjI4MDVfMSAoMykubXA0IiwiaWF0IjoxNzc0NDkzOTgxLCJleHAiOjMzMzEwNDkzOTgxfQ.S6bAjQloH4cbaKiTo1opm8VjiA11TqEV5p0WzKTWzK0", "_blank")}
              >
                Video Demostrativo: Agente de Atención
              </NeonButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main Image with floating animation */}
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src={brainImage}
                alt="AI Brain"
                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,243,255,0.3)] pt-[75px] pb-[75px]"
              />

              {/* Floating UI Elements */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-20 left-0 bg-black/60 backdrop-blur-md border border-primary/30 p-4 rounded-lg z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="font-exo text-sm text-primary">Sistema Operativo</div>
                </div>
                <div className="text-2xl font-orbitron font-bold text-white mt-1">99.9%</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 right-0 bg-black/60 backdrop-blur-md border border-secondary/30 p-4 rounded-lg z-20"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-secondary" />
                  <div className="font-exo text-sm text-secondary">Velocidad de Proceso</div>
                </div>
                <div className="text-2xl font-orbitron font-bold text-white mt-1">0.02ms</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Benefits Section */}
      <section id="soluciones" className="py-20 bg-transparent relative overflow-hidden z-0">
        {/* Base de color para fucionar el fondo gris del robot */}
        <div className="absolute inset-0 -z-20 bg-background" />
        
        {/* Focos de luz estilo nebulosa para dar color y resplandor al modelo 3D */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/90 rounded-full blur-[120px] z-[-15]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-secondary/80 rounded-full blur-[150px] z-[-15]" />
        
        {/* Spline 3D Background */}
        <div 
          className="absolute inset-0 -z-10 w-full h-full mix-blend-luminosity opacity-100"
          style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }}
        >
          <iframe 
            src="https://my.spline.design/nexbotbyaximoriscopycopy-6rnTuLTei6kpAegyEQW8McWK/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            title="Spline Robot Background"
            className="w-full h-full"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white text-glow-primary">Potencia Infinita</h2>
            <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
              Nuestros agentes autónomos optimizan cada aspecto de tu operación empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeonCard glowColor="primary" className="group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-white">Atención 24/7</h3>
              <p className="text-muted-foreground font-exo">
                Tus clientes nunca esperan. Respuestas instantáneas, resolución de problemas y soporte técnico en cualquier idioma, a cualquier hora.
              </p>
            </NeonCard>

            <NeonCard glowColor="secondary" className="group">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Cpu className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-white">Procesos Autónomos</h3>
              <p className="text-muted-foreground font-exo">
                Automatiza flujos de trabajo internos, gestión de inventario y logística sin intervención humana directa.
              </p>
            </NeonCard>

            <NeonCard glowColor="primary" className="group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-white">Ventas Inteligentes</h3>
              <p className="text-muted-foreground font-exo">
                Agentes de ventas que califican leads, agendan reuniones y cierran tratos utilizando análisis predictivo avanzado.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>

      <CatalogSection />
      <DiagnosticQuiz />

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden bg-black/20" id="como-funciona">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm">
              <span className="text-secondary font-exo text-sm tracking-widest uppercase font-bold">
                Metodología
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4 text-glow-secondary">Protocolo de Activación</h2>
            <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
              Del diagnóstico a producción en una semana o menos.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", period: "Día 1 · Mañana", title: "Diagnóstico", desc: "Mapeamos tus procesos y priorizamos el mayor ROI.", icon: <ShieldCheck /> },
                { step: "02", period: "Día 1 · Tarde", title: "Propuesta y Diseño", desc: "Definimos workflows concretos e hitos de éxito.", icon: <Bot /> },
                { step: "03", period: "Días 2 - 7", title: "Implementación", desc: "Construimos sobre n8n, conectamos APIs y probamos.", icon: <Cpu /> },
                { step: "04", period: "Día 8+", title: "Operación Activa", desc: "Lanzamiento y sistema Anti-Caídas vigilando 24/7.", icon: <Zap /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,243,255,0.3)] relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-black font-orbitron text-sm">
                      {item.step}
                    </div>
                    <div className="text-primary w-8 h-8 [&>svg]:w-full [&>svg]:h-full">{item.icon}</div>
                  </div>
                  <span className="text-[10px] font-orbitron text-secondary tracking-wider uppercase mb-1">{item.period}</span>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-muted-foreground font-exo text-xs px-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HowItWorksDetail />
      <AntiFallSection />
      <TestimonialsDetail />
      <PricingDetail />
      <DemoForm />
      {/* CTA Section */}
      <section id="cta-section" className="py-24 relative overflow-hidden isolate">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
          <HlsVideo
            src="https://stream.mux.com/sDz01Os9GN02ltJvgikeaUvZWsLRiR5FX5GuadCRkQc7E.m3u8"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        {/* Dark + color tint overlay to match the page palette */}
        <div className="absolute inset-0 z-[1] bg-black/55 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/20 via-transparent to-secondary/15 pointer-events-none mix-blend-overlay" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <NeonCard className="max-w-4xl mx-auto bg-black/20 backdrop-blur-[2px] border-primary/30 py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-6 leading-tight">
              ¿Listo para el Siguiente Nivel?
            </h2>
            <p className="text-xl text-muted-foreground font-exo mb-8 max-w-2xl mx-auto">
              La competencia sigue durmiendo. Tú puedes automatizar mientras ellos descansan.
            </p>
            <NeonButton
              className="text-xl px-10 py-5"
              glow
              onClick={() => window.open("https://calendly.com/imanagenteartificial/sesion-cotizacion-proyecto", "_blank")}
            >
              EMPIEZA HOY - AGENDA TU VIDEOLLAMADA <ArrowRight className="ml-2" />
            </NeonButton>
          </NeonCard>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Bot className="text-primary w-6 h-6" />
              <span className="text-xl font-orbitron font-bold text-white">
                IMAN<span className="text-primary">AI</span>
              </span>
            </div>

            <div className="flex gap-8 text-sm font-exo text-muted-foreground">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors hover:cursor-pointer">Privacidad</button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] bg-black/90 border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-orbitron text-primary mb-4">Política de Privacidad y Términos</DialogTitle>
                    <DialogDescription className="sr-only">
                      Política de privacidad y términos y condiciones
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6 text-white/80 font-exo">
                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">1. Política de Privacidad (IMAN AI)</h3>
                        <p className="mb-2"><strong className="text-primary">Responsable del Tratamiento:</strong> Antonio Villarreal</p>
                        <p className="mb-2"><strong className="text-primary">Ubicación:</strong> Quito, Ecuador</p>
                        <p className="mb-2"><strong className="text-primary">Contacto:</strong> imanagenteartificial@gmail.com</p>
                        <p className="mb-2"><strong className="text-primary">Finalidad:</strong> Los datos que nos proporcionas en el formulario de contacto se utilizan exclusivamente para responder tus dudas sobre automatización con IA y agendar sesiones de cotización.</p>
                        <p className="mb-2"><strong className="text-primary">Consentimiento:</strong> Al marcar la casilla de aceptación en nuestro sitio, otorgas tu consentimiento libre y específico para que tratemos tus datos conforme al Art. 12 de la LOPDP de Ecuador.</p>
                        <p className="mb-2"><strong className="text-primary">Tus Derechos:</strong> Tienes derecho a solicitar el acceso, eliminación o actualización de tus datos en cualquier momento enviando un correo a imanagenteartificial@gmail.com.</p>
                        <p className="mb-2"><strong className="text-primary">Seguridad:</strong> Nos comprometemos a no vender ni compartir tus datos con terceros sin tu autorización expresa.</p>
                      </section>
                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">2. Términos y Condiciones</h3>
                        <p className="mb-2"><strong className="text-primary">Servicios:</strong> IMAN AI ofrece soluciones de inteligencia artificial para negocios en Ecuador, operando 24/7.</p>
                        <p className="mb-2"><strong className="text-primary">Propiedad Intelectual:</strong> El nombre IMAN AI, sus logotipos y el contenido visual (incluyendo ilustraciones de cerebros neón) son propiedad de Antonio Villarreal y están protegidos por las leyes de propiedad intelectual ecuatorianas.</p>
                        <p className="mb-2"><strong className="text-primary">Uso del Sitio:</strong> El usuario se compromete a proporcionar información real en los formularios de contacto y a no realizar acciones que comprometan la seguridad del sitio.</p>
                        <p className="mb-2"><strong className="text-primary">Jurisdicción:</strong> Cualquier controversia legal se someterá a las leyes de la República del Ecuador y a los tribunales competentes de la ciudad de Quito.</p>
                      </section>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors hover:cursor-pointer">Términos</button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] bg-black/90 border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-orbitron text-primary mb-4">Términos y Condiciones de Uso</DialogTitle>
                    <DialogDescription className="text-muted-foreground mb-4">
                      Última actualización: 18 de enero de 2026
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6 text-white/80 font-exo">
                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">1. Información General</h3>
                        <p>El presente documento establece los términos que regulan el acceso y uso del sitio web de IMAN AI. El sitio es de propiedad y gestión de Antonio Villarreal, con domicilio en la ciudad de Quito, Ecuador, y correo de contacto imanagenteartificial@gmail.com.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">2. Aceptación de los Términos</h3>
                        <p>Al acceder y navegar por este sitio web, el usuario acepta de manera expresa y sin reservas todos los términos aquí descritos. Si no está de acuerdo con estos términos, deberá abstenerse de utilizar el sitio y sus servicios.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">3. Servicios de Automatización con IA</h3>
                        <p className="mb-2">IMAN AI proporciona información sobre soluciones de inteligencia artificial, incluyendo pero no limitado a atención 24/7, procesos autónomos y ventas inteligentes.</p>
                        <p className="mb-2">La solicitud de una "Sesión de Cotización" o "Demo" no garantiza la contratación del servicio hasta que se firme un contrato formal independiente.</p>
                        <p>Los precios mostrados en el detalle de tarifas son referenciales y pueden variar según los requerimientos técnicos del cliente.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">4. Propiedad Intelectual</h3>
                        <p className="mb-2">Todo el contenido visual, código fuente, logotipos, y diseños (incluyendo la ilustración del cerebro neón y componentes de la interfaz) son propiedad intelectual de Antonio Villarreal o se utilizan bajo licencia.</p>
                        <p>Queda prohibida la reproducción total o parcial del contenido sin autorización previa por escrito.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">5. Responsabilidad del Usuario</h3>
                        <p className="mb-2">El usuario se compromete a:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Proporcionar información verídica y actual en los formularios de contacto.</li>
                          <li>No utilizar el sitio para actividades ilícitas o envío de contenido malicioso (spam/malware).</li>
                          <li>Respetar la integridad de los sistemas y la seguridad del servidor en el puerto 5000 y dominios asociados.</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">6. Limitación de Responsabilidad</h3>
                        <p>IMAN AI no garantiza que el sitio esté libre de errores técnicos o interrupciones temporales debido a mantenimientos del servidor. No nos hacemos responsables por el mal uso que el usuario dé a la información presentada.</p>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-white mb-2">7. Ley Aplicable y Jurisdicción</h3>
                        <p>Estos términos se rigen por las leyes de la República del Ecuador. Para cualquier controversia, las partes se someten a la competencia de los jueces y tribunales de la ciudad de Quito.</p>
                      </section>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
              <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
            </div>

            <div className="text-xs text-muted-foreground font-exo">
              © 2025 IMAN AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
