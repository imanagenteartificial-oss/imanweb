import { NeonCard } from "@/components/ui/neon-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Check, Zap, ArrowRight, Star, Globe, Code, Rocket, Search, Palette, BarChart3, ShieldCheck, Layers, MessageSquare, Users, TrendingUp, Mail, Calendar, Megaphone, Target, Bot, Clock } from "lucide-react";

export function PricingDetail() {
  return (
    <section id="precios-detalle" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-exo text-sm tracking-widest uppercase font-bold">
              Planes de Inversión
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white text-glow-primary">
            Escala tu Negocio
          </h2>
          <p className="text-lg text-muted-foreground font-exo max-w-2xl mx-auto">
            Elige el nivel de automatización que tu empresa necesita para dominar el mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <NeonCard glowColor="secondary" className="bg-black/60 border-secondary/30 relative flex flex-col h-full">
            <div className="text-center pt-8 pb-8 border-b border-white/10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2 uppercase tracking-tighter">Starter</h3>
              <p className="text-muted-foreground font-exo text-xs mb-3 px-2">Ideal para negocios que quieren empezar a vender en automático</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-muted-foreground line-through font-exo text-lg">$150 USD</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-orbitron font-bold text-white">$75</span>
                <span className="text-xl font-exo text-muted-foreground">/mes</span>
              </div>
              <div className="mt-4 inline-block px-3 py-1 rounded bg-secondary/20 border border-secondary/30">
                <span className="text-secondary font-bold font-exo text-sm uppercase tracking-wide">50% OFF — Promoción Activa</span>
              </div>
            </div>

            <div className="py-8 space-y-4 flex-grow">
              {/* Hero Feature */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-exo text-sm font-bold">Agente de IA 24/7 — Atención y Ventas</p>
                  <p className="text-muted-foreground font-exo text-xs mt-0.5">Tu agente responde, califica leads y cierra ventas mientras tú descansas. <span className="text-primary font-semibold">Nunca pierdas un cliente por no responder a tiempo.</span></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <p className="text-white font-exo text-sm"><span className="font-bold text-secondary">BONUS:</span> 1 Campaña de Facebook Ads GRATIS al mes</p>
                  <p className="text-muted-foreground font-exo text-xs mt-0.5">Diseñamos, segmentamos y lanzamos tu campaña para generar leads calificados desde el día uno.</p>
                </div>
              </div>

              {/* CRM Features broken out */}
              <div className="pt-2 border-t border-white/5 space-y-3">
                <p className="text-primary font-exo text-xs font-bold uppercase tracking-wider">CRM Inteligente incluido:</p>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">Embudo de ventas con etiquetas — visualiza cada lead y en qué etapa está para no perder oportunidades</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">Seguimientos tipo humano que nutren al lead con mensajes personalizados hasta que compre</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">Agendamiento automático de citas y recordatorios — reduce no-shows hasta un 80%</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Megaphone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">Envío automático de promociones, cotizaciones proforma y publicidad segmentada a tus clientes</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">Integración con logística, proveedores, ventas, gerencia y todos los departamentos de tu empresa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground font-exo text-xs">Soporte técnico ilimitado — siempre estamos contigo</p>
              </div>
            </div>

            <div className="pt-4 mt-auto">
              <NeonButton
                variant="primary"
                className="w-full text-lg py-6"
                glow
                onClick={() => window.open("https://calendly.com/imanagenteartificial/sesion-cotizacion-proyecto", "_blank")}
              >
                EMPIEZA HOY <ArrowRight className="ml-2 w-5 h-5" />
              </NeonButton>
              <p className="text-center text-muted-foreground font-exo text-xs mt-3">
                Ahorra <span className="text-secondary font-bold">$75/mes</span> — Promoción por tiempo limitado
              </p>
            </div>
          </NeonCard>

          {/* All-In-One Plan */}
          <NeonCard glowColor="primary" className="bg-black/60 border-primary/50 relative overflow-visible shadow-[0_0_30px_rgba(0,243,255,0.2)] flex flex-col h-full">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)] z-20 whitespace-nowrap">
              <span className="font-orbitron font-bold text-black text-sm tracking-wider flex items-center gap-2">
                <Star className="w-4 h-4 fill-black" /> MÁS ELEGIDO
              </span>
            </div>

            <div className="text-center pt-8 pb-8 border-b border-white/10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2 uppercase tracking-tighter">All-In-One</h3>
              <p className="text-muted-foreground font-exo text-xs mb-3 px-2">La máquina de ventas completa para empresas que quieren dominar su mercado</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-muted-foreground line-through font-exo text-lg">$700 USD</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-orbitron font-bold text-white">$230</span>
                <span className="text-xl font-exo text-muted-foreground">/mes</span>
              </div>
              <div className="mt-4 inline-block px-3 py-1 rounded bg-primary/20 border border-primary/30">
                <span className="text-primary font-bold font-exo text-sm uppercase tracking-wide">67% OFF — Promoción Activa</span>
              </div>
            </div>

            <div className="py-8 space-y-4 flex-grow">
              {/* Todo lo del Starter */}
              <div className="px-3 py-2 rounded bg-white/5 border border-white/10">
                <p className="text-primary font-exo text-xs font-bold uppercase tracking-wider text-center">✦ Todo lo incluido en Starter +</p>
              </div>

              {/* Hero Feature */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-exo text-sm font-bold">Agente de IA Avanzado — Atención, Ventas y Retención</p>
                  <p className="text-muted-foreground font-exo text-xs mt-0.5">Un agente con memoria contextual que recuerda interacciones pasadas, personaliza respuestas y <span className="text-primary font-semibold">convierte hasta 3x más que un chat convencional.</span></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <p className="text-white font-exo text-sm"><span className="font-bold text-secondary">BONUS:</span> 1 Campaña de Facebook Ads GRATIS al mes</p>
                  <p className="text-muted-foreground font-exo text-xs mt-0.5">Diseño, copywriting, segmentación avanzada y optimización A/B incluidos — tú solo ves los resultados.</p>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="pt-2 border-t border-white/5 space-y-3">
                <p className="text-primary font-exo text-xs font-bold uppercase tracking-wider">Dominio total de redes sociales:</p>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs"><span className="text-white font-semibold">Messenger + Instagram DM automatizados</span> — las conversaciones se activan solas, responden consultas, califican y agendan citas sin intervención humana</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Megaphone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs"><span className="text-white font-semibold">Agente de contenido para Facebook e Instagram</span> — crea, programa y publica posts optimizados para engagement. Tu marca siempre activa y visible.</p>
                </div>
              </div>

              {/* Prospección */}
              <div className="pt-2 border-t border-white/5 space-y-3">
                <p className="text-primary font-exo text-xs font-bold uppercase tracking-wider">Motor de adquisición de clientes:</p>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs"><span className="text-white font-semibold">Prospección inteligente por email</span> — encuentra correos verificados de decisores clave en tu industria y envía campañas de e-mailing masivo personalizadas</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs"><span className="text-white font-semibold">+1 automatización personalizada</span> — la diseñamos según el proceso específico que más impacte tu facturación</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs"><span className="text-secondary font-semibold">Nos adaptamos a tu operación</span> — cada negocio es único, por eso personalizamos cada flujo de automatización para maximizar tu ROI</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground font-exo text-xs">Soporte técnico prioritario e ilimitado — respuesta en menos de 2 horas</p>
              </div>
            </div>

            <div className="pt-4 mt-auto">
              <NeonButton
                className="w-full text-lg py-6 shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                glow
                onClick={() => window.open("https://calendly.com/imanagenteartificial/sesion-cotizacion-proyecto", "_blank")}
              >
                AGENDA TU VIDEOLLAMADA <ArrowRight className="ml-2 w-5 h-5" />
              </NeonButton>
              <p className="text-center text-muted-foreground font-exo text-xs mt-3">
                Ahorra <span className="text-primary font-bold">$470/mes</span> — La inversión que se paga sola
              </p>
            </div>
          </NeonCard>

          {/* Desarrollo Web & Apps Plan */}
          <NeonCard glowColor="secondary" className="bg-black/60 border-secondary/50 relative overflow-visible shadow-[0_0_30px_rgba(255,0,255,0.15)] flex flex-col h-full">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary via-purple-500 to-primary px-6 py-2 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.4)] z-20 whitespace-nowrap">
              <span className="font-orbitron font-bold text-white text-sm tracking-wider flex items-center gap-2">
                <Rocket className="w-4 h-4" /> NUEVO
              </span>
            </div>

            <div className="text-center pt-8 pb-8 border-b border-white/10">
              <h3 className="text-xl font-orbitron font-bold text-white mb-2 uppercase tracking-tighter">Desarrollo Web & Apps</h3>
              <p className="text-muted-foreground font-exo text-xs mb-3 px-2">Soluciones digitales a la medida de tu negocio</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Cotización</span>
              </div>
              <p className="text-muted-foreground font-exo text-sm mt-1">Proforma personalizada</p>
              <div className="mt-4 inline-block px-3 py-1 rounded bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30">
                <span className="text-secondary font-bold font-exo text-sm uppercase tracking-wide">Precio bajo Proforma</span>
              </div>
            </div>

            <div className="py-8 space-y-5 flex-grow">
              {/* Servicio 1: Páginas Web Futuristas */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <p className="text-white font-exo text-sm font-bold">Páginas Web Futuristas con SEO Optimizado</p>
                </div>
                <p className="text-muted-foreground font-exo text-xs ml-9 leading-relaxed">
                  Diseño premium de última generación con animaciones inmersivas, dark mode y estética sci-fi. Incluye <span className="text-primary font-semibold">SEO técnico avanzado</span> (Core Web Vitals, Schema Markup, velocidad de carga &lt;2s) para posicionar tu marca en Google y captar tráfico orgánico cualificado. Tu sitio web será tu mejor vendedor 24/7.
                </p>
              </div>

              {/* Servicio 2: Landing Pages */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-white font-exo text-sm font-bold">Landing Pages de Alta Conversión</p>
                </div>
                <p className="text-muted-foreground font-exo text-xs ml-9 leading-relaxed">
                  Páginas de aterrizaje diseñadas con <span className="text-primary font-semibold">psicología de ventas</span> y copywriting persuasivo. Arquitectura CRO (Conversion Rate Optimization) que transforma visitantes en clientes. Ideales para campañas de ads, lanzamientos de productos y captación de leads a escala.
                </p>
              </div>

              {/* Servicio 3: Apps Empresariales / SaaS */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Code className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <p className="text-white font-exo text-sm font-bold">Aplicaciones Empresariales & SaaS a Medida</p>
                </div>
                <p className="text-muted-foreground font-exo text-xs ml-9 leading-relaxed">
                  Desarrollo full-stack de <span className="text-secondary font-semibold">plataformas escalables</span>: dashboards, CRMs, ERPs, portales de clientes y productos SaaS con monetización integrada. Arquitectura moderna, segura y preparada para crecer con tu negocio sin límites técnicos.
                </p>
              </div>

              {/* Extras incluidos */}
              <div className="pt-3 border-t border-white/5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">SEO on-page y off-page para máxima visibilidad orgánica en buscadores</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Palette className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">Diseño UI/UX profesional responsivo para todos los dispositivos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">SSL, hosting optimizado y protección contra vulnerabilidades</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-exo text-xs">Integraciones con pasarelas de pago, CRM, analíticas y APIs de terceros</p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-auto">
              <NeonButton
                className="w-full text-lg py-6 shadow-[0_0_20px_rgba(255,0,255,0.3)]"
                glow
                onClick={() => window.open("https://calendly.com/imanagenteartificial/sesion-cotizacion-proyecto", "_blank")}
              >
                AGENDA TU VIDEOLLAMADA <ArrowRight className="ml-2 w-5 h-5" />
              </NeonButton>
              <p className="text-center text-muted-foreground font-exo text-xs mt-3">
                Recibe tu proforma personalizada sin compromiso
              </p>
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
}
