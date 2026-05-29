import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonCard } from "@/components/ui/neon-card";
import { NeonButton } from "@/components/ui/neon-button";
import { 
  MessageSquare, 
  Calendar, 
  Database, 
  Repeat, 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  Coins, 
  Check, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";

interface CatalogItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  points: string[];
  result: string;
  cases: string;
}

interface Category {
  id: string;
  label: string;
  items: CatalogItem[];
}

export function CatalogSection() {
  const [activeTab, setActiveTab] = useState("atencion");

  const categories: Category[] = [
    {
      id: "atencion",
      label: "Atención & Agenda",
      items: [
        {
          num: "01",
          title: "Agente IA Conversacional en WhatsApp, Messenger e Instagram",
          desc: "Un agente que entiende lo que tu cliente quiere, recuerda conversaciones pasadas y responde en segundos, sin importar la hora.",
          icon: <MessageSquare className="w-6 h-6 text-primary" />,
          points: [
            "Memoria conversacional persistente conectada a tu CRM",
            "Multi-canal: WhatsApp Evolution, Messenger, Instagram DM",
            "Transferencia inteligente a humano cuando el caso lo amerita",
            "Aprende del histórico de cada cliente y personaliza la respuesta"
          ],
          result: "Respuesta en segundos, 24/7, sin agrandar el equipo. Tu cliente nunca espera al lunes para ser atendido.",
          cases: "Veterinarias, inmobiliarias, belleza, automotriz, importadoras"
        },
        {
          num: "02",
          title: "Agendamiento Conversacional + Recordatorios Automáticos",
          desc: "Tu cliente reserva por WhatsApp en 4 mensajes. El sistema valida tu agenda real, confirma y recuerda. Cero llamadas, cero huecos.",
          icon: <Calendar className="w-6 h-6 text-secondary" />,
          points: [
            "Validación automática en tu CRM u Odoo antes de confirmar",
            "Recordatorios automáticos a las 4h y 1h antes de la cita",
            "Reagendar, cancelar y confirmar directamente de forma conversacional",
            "Auto-finalización y registro de la cita post-atención"
          ],
          result: "Agenda llena sin coordinación humana. Reducción drástica de inasistencias (no-shows) hasta en un 80%.",
          cases: "Clínicas médicas, salones de belleza, talleres automotrices, asesorías"
        }
      ]
    },
    {
      id: "leads",
      label: "Leads & Seguimiento",
      items: [
        {
          num: "03",
          title: "Captura de Leads + CRM Sincronizado en Tiempo Real",
          desc: "Cada formulario, cada DM, cada llamada perdida se registra en tu CRM en segundos, normalizado y listo con contexto completo.",
          icon: <Database className="w-6 h-6 text-primary" />,
          points: [
            "Formularios web → CRM asíncrono, sin tiempo de espera",
            "Sincronización bidireccional con Odoo, Google Sheets y CRMs propios",
            "Validación y normalización del dato con IA (emails, números, nombres)",
            "Cumpleaños y fechas clave registradas para campañas de fidelización"
          ],
          result: "Ningún lead se pierde en hojas de cálculo desactualizadas. Tu equipo comercial inicia con el contexto completo.",
          cases: "Importadoras vehiculares, clínicas, agencias de servicios"
        },
        {
          num: "04",
          title: "Seguimientos Automáticos: Post-Venta, Cobranza y Re-engagement",
          desc: "Cadencias inteligentes a las 24h, 48h, 72h. Cobranza continua hasta el cierre y reactivación de clientes fríos con mensajes personalizados por IA.",
          icon: <Repeat className="w-6 h-6 text-secondary" />,
          points: [
            "Cadencia automatizada y personalizada post-contacto",
            "Cobranza continua mediante recordatorios escalonados hasta el cierre",
            "Mensajes redactados por IA adaptados al tono e histórico del cliente",
            "Detección proactiva de leads inactivos y disparo de reactivación"
          ],
          result: "Conversión de entre un 30% y 50% de leads que normalmente se enfrían por falta de seguimiento manual.",
          cases: "Inmobiliarias (cobranza continua), agencias (re-engagement), retail"
        }
      ]
    },
    {
      id: "ventas",
      label: "Ventas & Marketing",
      items: [
        {
          num: "05",
          title: "Cotizaciones y Propuestas Automatizadas en Segundos",
          desc: "El lead pregunta el precio por WhatsApp y recibe una propuesta correctamente calculada, con descuentos y disponibilidad antes de enfriarse.",
          icon: <Calculator className="w-6 h-6 text-primary" />,
          points: [
            "Cotización conversacional con cálculo inteligente de precios y descuentos",
            "Envío automático de catálogos y PDF según el interés detectado",
            "Integración nativa con pasarelas de pago y tarjeta de crédito",
            "Trazabilidad completa: cada cotización queda registrada y es medible"
          ],
          result: "Cierre hasta 10 veces más rápido. Menos errores manuales y propuesta lista cuando el lead está caliente.",
          cases: "Distribuidoras, centros automotrices (repuestos/llantas), agencias"
        },
        {
          num: "06",
          title: "Marketing de Contenido y Ads potenciados por IA",
          desc: "Posts, imágenes y videos generados con la voz de tu marca. Reportes de Meta Ads y TikTok directos a WhatsApp sin agencias costosas.",
          icon: <Sparkles className="w-6 h-6 text-secondary" />,
          points: [
            "Generación automática de publicaciones (texto, imágenes y guiones de video)",
            "Extensión de video con IA (Vertex AI / Veo) para Reels y Shorts",
            "Calendarios automatizados 'stage-driven' por etapas de marca",
            "Reportes de rendimiento semanales de Meta/TikTok directo a WhatsApp"
          ],
          result: "Contenido constante en múltiples canales a una fracción del costo tradicional. Dejas de depender de horas-hombre.",
          cases: "Inmobiliarias, marcas de belleza, marcas con múltiples sedes"
        }
      ]
    },
    {
      id: "datos",
      label: "Datos & Finanzas",
      items: [
        {
          num: "07",
          title: "Reportes Automáticos directo a WhatsApp y Telegram",
          desc: "Ventas, citas, costos y conversiones. Todo llega al WhatsApp de la gerencia todos los días sin necesidad de abrir dashboards.",
          icon: <TrendingUp className="w-6 h-6 text-primary" />,
          points: [
            "Reportes diarios, semanales y mensuales configurados por canal",
            "Cortes financieros y fechas clave automatizadas (ej. corte del 15)",
            "Cálculo de rentabilidad restando costos operativos e inversión en IA",
            "Alertas de anomalías inmediatas (ej. caída de conversión o subida de costos)"
          ],
          result: "Decisiones estratégicas basadas en datos frescos. El dueño sabe lo que pasa en su negocio antes de que se lo reporten.",
          cases: "Importadoras, franquicias de retail, agencias con múltiples proyectos"
        },
        {
          num: "08",
          title: "Contabilidad y Finanzas Conversacionales",
          desc: "Registra gastos e ingresos por Telegram, recibe notificaciones de compras y un reporte financiero diario al instante.",
          icon: <Coins className="w-6 h-6 text-secondary" />,
          points: [
            "Registro contable por Telegram → Google Sheets en pocos segundos",
            "Notificaciones en tiempo real de transacciones, ventas y abonos",
            "Reportes financieros diarios automáticos con cortes parametrizables",
            "Control y conciliación asistida de pagos con tarjeta de crédito"
          ],
          result: "Contabilidad al día con menos errores. Decisiones en base a números reales del día, no del balance del mes pasado.",
          cases: "Comercios, pymes, importadoras vehiculares, consultorios"
        }
      ]
    }
  ];

  return (
    <section id="catalogo" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-exo text-sm tracking-widest uppercase font-bold">
              Catálogo de Soluciones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white text-glow-primary">
            Workflows Listos para tu Negocio
          </h2>
          <p className="text-lg text-muted-foreground font-exo max-w-2xl mx-auto">
            Soluciones de automatización estructuradas y probadas que se adaptan a tu infraestructura actual.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-lg font-orbitron font-bold tracking-wider text-xs sm:text-sm uppercase transition-all duration-300 border cursor-pointer ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-primary to-primary/80 text-black border-primary shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                  : "bg-black/40 text-muted-foreground border-white/10 hover:border-primary/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {categories.find((c) => c.id === activeTab)?.items.map((item) => (
                <NeonCard 
                  key={item.num}
                  glowColor={activeTab === "leads" || activeTab === "ventas" ? "secondary" : "primary"}
                  className="bg-black/50 border-white/10 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-orbitron text-xs font-bold text-muted-foreground tracking-widest">
                          SISTEMA {item.num}
                        </span>
                      </div>
                      <span className="text-3xl font-orbitron font-bold opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-orbitron font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-exo text-sm mb-6 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 mb-6">
                      {item.points.map((pt, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-white/80 font-exo text-xs leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footnote / Result & Case Studies */}
                  <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
                    <div className="p-3.5 rounded bg-primary/5 border border-primary/10">
                      <p className="font-exo text-xs text-white/90">
                        <strong className="text-primary font-orbitron uppercase tracking-wider text-[10px] block mb-1">
                          Resultado Clave
                        </strong>
                        {item.result}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-orbitron font-bold text-[9px] text-secondary tracking-wider uppercase">
                        Casos Reales:
                      </span>
                      <span className="font-exo text-[11px] text-muted-foreground italic">
                        {item.cases}
                      </span>
                    </div>
                  </div>
                </NeonCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Banner inside Catalog */}
        <div className="mt-16 text-center">
          <p className="font-exo text-muted-foreground text-sm mb-6">
            ¿Necesitas una integración específica que no ves en el catálogo?
          </p>
          <NeonButton 
            variant="primary" 
            className="px-8 py-3"
            onClick={() => document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            Diseñar Automatización a Medida <ArrowRight className="ml-2 w-4 h-4" />
          </NeonButton>
        </div>
      </div>
    </section>
  );
}
