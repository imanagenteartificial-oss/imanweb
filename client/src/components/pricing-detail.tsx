import { NeonCard } from "@/components/ui/neon-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Check, Zap, ArrowRight, Star } from "lucide-react";

export function PricingDetail() {
  return (
    <section id="precios-detalle" className="py-20 bg-black/40 relative scroll-mt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-exo text-sm tracking-widest uppercase font-bold">
              Oferta Limitada
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
            Plan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">All-In-One</span>
          </h2>
          <p className="text-lg text-muted-foreground font-exo max-w-2xl mx-auto">
            Todo lo que necesitas para automatizar y escalar, en un solo paquete potente.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <NeonCard glowColor="primary" className="bg-black/60 border-primary/50 relative overflow-visible">
            {/* Best Value Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)]">
              <span className="font-orbitron font-bold text-black text-sm tracking-wider flex items-center gap-2">
                <Star className="w-4 h-4 fill-black" /> RECOMENDADO
              </span>
            </div>

            <div className="text-center pt-8 pb-8 border-b border-white/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-muted-foreground line-through font-exo text-lg">$700 USD</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-6xl font-orbitron font-bold text-white">$300</span>
                <span className="text-xl font-exo text-muted-foreground">/mes</span>
              </div>
              <div className="mt-4 inline-block px-3 py-1 rounded bg-primary/20 border border-primary/30">
                <span className="text-primary font-bold font-exo text-sm">PROMOCIÓN ACTIVA</span>
              </div>
            </div>

            <div className="py-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-white font-exo text-sm"><span className="font-bold text-white">Agente de IA 24/7</span> (Atención y Ventas)</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-secondary" />
                </div>
                <p className="text-white font-exo text-sm"><span className="font-bold text-secondary">BONUS:</span> 1 Campaña de Facebook Ads GRATIS al mes</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground font-exo text-sm">Incluye CRM con embudo de ventas y etiquetas para integrar a equipo de la empresa, seguimientos al lead tipo humano, agendamientos de citas y recordatorios, envío de promociones y publicidad al cliente.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground font-exo text-sm">
                  Integración fluida con Messenger de Facebook y DM de Instagram, donde las conversaciones despiertan solas.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground font-exo text-sm">
                  Agente inteligente de creación y publicación de contenido para Facebook e Instagram, sembrando presencia constante y visión a largo plazo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground font-exo text-sm">
                  Agente de prospección de correos calificados, diseñado para campañas de email marketing que no persiguen, atraen.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground font-exo text-sm">Soporte técnico ilimitado</p>
              </div>
            </div>

            <div className="pt-4">
              <NeonButton 
                className="w-full text-lg py-6" 
                glow
                onClick={() => window.open("https://calendly.com/imanagenteartificial/sesion-cotizacion-proyecto", "_blank")}
              >
                EMPIEZA HOY - AGENDA TU VIDEOLLAMADA <ArrowRight className="ml-2 w-5 h-5" />
              </NeonButton>
              <p className="text-center text-xs text-muted-foreground mt-4 font-exo">
                Sin contratos forzosos. Cancela cuando quieras.
              </p>
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
}
