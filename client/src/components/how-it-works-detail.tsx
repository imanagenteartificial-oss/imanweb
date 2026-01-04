import { NeonCard } from "@/components/ui/neon-card";
import { Bot, BarChart3 } from "lucide-react";

export function HowItWorksDetail() {
  return (
    <section id="como-funciona-detalle" className="py-20 bg-black/40 relative scroll-mt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
           <NeonCard glowColor="secondary" className="bg-black/50 border-secondary/30">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/30">
                  <Bot className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Agentes Autónomos</h3>
                  <p className="text-muted-foreground font-exo text-sm leading-relaxed">
                    Un sistema que interactúa, recopila datos y ejecuta tareas sin intervención humana. Atiende clientes 24/7, responde como humano, envía multimedia, agenda citas y procesa solicitudes automáticamente.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                  <BarChart3 className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Integración Publicitaria</h3>
                  <p className="text-muted-foreground font-exo text-sm leading-relaxed">Conexión directa con messenger Facebook e Instagram para atencion al cliente, y creacion de imagenes y videos ademas de post en automatico. Multiplica tus ventas con un "vendedor estrella" que nunca duerme.</p>
                </div>
              </div>
            </div>
          </NeonCard>
        </div>

        <div className="order-1 md:order-2 text-left">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm">
            <span className="text-secondary font-exo text-sm tracking-widest uppercase font-bold">
              Inteligencia Superior
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 leading-tight">
            No es un Chatbot, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
              es tu Empleado Digital
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-exo mb-8 leading-relaxed">
            Imagina un asistente que no solo responde, sino que entiende, actúa y vende. Nuestra tecnología transforma interacciones pasivas en resultados tangibles para tu negocio.
          </p>
          <div className="flex flex-wrap gap-4">
             <div className="px-4 py-2 rounded border border-white/10 bg-white/5 font-exo text-sm flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               Atención 24/7
             </div>
             <div className="px-4 py-2 rounded border border-white/10 bg-white/5 font-exo text-sm flex items-center gap-2">
               <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
               Ventas Automáticas
             </div>
             <div className="px-4 py-2 rounded border border-white/10 bg-white/5 font-exo text-sm flex items-center gap-2">
               <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
               Agenda Inteligente
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
