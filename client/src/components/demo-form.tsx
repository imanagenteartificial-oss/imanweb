import * as React from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { NeonCard } from "@/components/ui/neon-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function DemoForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = "Hola, quiero entrar a la demo y conversar con el agente IA.";
    window.open(`https://wa.me/593998452083?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="demo-section" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-glow-primary">
            Solicitar Demo Interactiva
          </h2>
          <p className="text-lg text-muted-foreground font-exo">
            llena el formulario con tus datos y dale click al boton donde te llevara a tenre una conversacion fluida en whatsapp con nuestro agente IA, en donde podras hacerle todas las preguntas que uqieras para aclarar todas tus dudas sobre nuestro servicio.
          </p>
        </div>

        <NeonCard className="max-w-2xl mx-auto p-8 bg-black/60 backdrop-blur-xl border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary font-orbitron text-xs uppercase tracking-widest">Nombre Completo</Label>
                <Input 
                  id="name" 
                  placeholder="Ej: Juan Pérez" 
                  className="bg-white/5 border-primary/20 focus:border-primary text-white font-exo"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-primary font-orbitron text-xs uppercase tracking-widest">Empresa</Label>
                <Input 
                  id="company" 
                  placeholder="Nombre de tu negocio" 
                  className="bg-white/5 border-primary/20 focus:border-primary text-white font-exo"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-orbitron text-xs uppercase tracking-widest">Correo Electrónico</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-white/5 border-primary/20 focus:border-primary text-white font-exo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" className="text-primary font-orbitron text-xs uppercase tracking-widest">¿Qué deseas automatizar?</Label>
              <Textarea 
                id="interest" 
                placeholder="Cuéntanos brevemente tus necesidades..." 
                className="bg-white/5 border-primary/20 focus:border-primary text-white font-exo min-h-[100px]"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <NeonButton 
                type="submit" 
                className="w-full text-lg py-6" 
                glow
              >
                ENTRAR A DEMO <Send className="ml-2 w-5 h-5" />
              </NeonButton>
            </motion.div>
          </form>
        </NeonCard>
      </div>
    </section>
  );
}
