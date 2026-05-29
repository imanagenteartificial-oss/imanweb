import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonCard } from "@/components/ui/neon-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Check, ClipboardCheck, AlertTriangle, ArrowRight, Star } from "lucide-react";

interface Question {
  id: number;
  text: string;
}

export function DiagnosticQuiz() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const questions: Question[] = [
    { id: 1, text: "Tu equipo responde las mismas preguntas más de 20 veces al día." },
    { id: 2, text: "Se pierden leads que entran fuera del horario o en fin de semana." },
    { id: 3, text: "El seguimiento depende de que alguien \"se acuerde\" de hacerlo." },
    { id: 4, text: "La agenda tiene huecos que un mejor recordatorio podría llenar." },
    { id: 5, text: "La cobranza depende de llamadas y mensajes manuales uno por uno." },
    { id: 6, text: "Marketing tarda más de 2 días en generar contenido para redes." },
    { id: 7, text: "No sabes ahora mismo cuántas ventas hubo ayer sin pedir un reporte." },
    { id: 8, text: "La información del cliente está repartida en 3 o más herramientas desconectadas." }
  ];

  const handleToggle = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const score = selectedIds.length;

  const getResult = () => {
    if (score === 0) {
      return {
        title: "Operación Estable",
        highlight: "Tu negocio no reporta puntos críticos evidentes hoy.",
        desc: "Aun así, si quieres escalar tus ventas o reducir tus costos operativos al mínimo con agentes autónomos, podemos analizar tus flujos.",
        cta: "Agenda tu consulta preventiva",
        color: "primary" as const,
        bgClass: "bg-primary/5 border-primary/20",
        urgency: "Bajo"
      };
    } else if (score < 3) {
      return {
        title: "Potencial de Optimización",
        highlight: "Hay puntos clave donde la IA puede liberar horas de tu equipo.",
        desc: "Con 1 o 2 automatizaciones estratégicas (como agendamiento o respuestas rápidas) puedes recuperar hasta 60 horas al mes.",
        cta: "Analiza tu caso en 30 minutos",
        color: "primary" as const,
        bgClass: "bg-primary/5 border-primary/20",
        urgency: "Moderado"
      };
    } else if (score < 5) {
      return {
        title: "Caso de Automatización Recomendado",
        highlight: "Podemos liberar entre 100 y 400+ horas al mes a tu equipo.",
        desc: "Hay un caso claro de automatización con ROI medible. Tu equipo comercial está perdiendo tiempo que debería usar para cerrar negocios.",
        cta: "Diseña tu plan de automatización",
        color: "primary" as const,
        bgClass: "bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(0,243,255,0.1)]",
        urgency: "Importante"
      };
    } else if (score < 7) {
      return {
        title: "Pérdida de Ingresos Activa",
        highlight: "Probablemente estás dejando dinero sobre la mesa cada semana.",
        desc: "La falta de respuesta inmediata y la falta de seguimiento automático te están costando ventas. Tus leads se están enfriando.",
        cta: "Recuperar clientes con IA",
        color: "secondary" as const,
        bgClass: "bg-secondary/5 border-secondary/20 shadow-[0_0_25px_rgba(188,19,254,0.05)]",
        urgency: "Alto"
      };
    } else {
      return {
        title: "¡Diagnóstico Crítico!",
        highlight: "Hablemos esta semana de forma urgente. La oportunidad es grande.",
        desc: "Tu negocio depende enteramente de procesos manuales, y la información está dispersa. Estás al límite de tu capacidad operativa.",
        cta: "AGENDAR DIAGNÓSTICO URGENTE",
        color: "secondary" as const,
        bgClass: "bg-secondary/15 border-secondary/40 shadow-[0_0_30px_rgba(188,19,254,0.15)]",
        urgency: "Crítico"
      };
    }
  };

  const result = getResult();

  return (
    <section id="diagnostico" className="py-24 relative overflow-hidden bg-background scroll-mt-20">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-exo text-sm tracking-widest uppercase font-bold flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              Autodiagnóstico
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white text-glow-primary">
            ¿Tu Empresa está Lista para Multiplicar su Capacidad?
          </h2>
          <p className="text-lg text-muted-foreground font-exo max-w-2xl mx-auto">
            Marca las situaciones que ocurren actualmente en tu negocio y calcula el retorno de inversión y urgencia de automatizar.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Quiz Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {questions.map((q) => {
              const isSelected = selectedIds.includes(q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => handleToggle(q.id)}
                  className={`text-left p-5 rounded-lg border transition-all duration-300 font-exo relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-br from-black/80 to-primary/10 border-primary text-white shadow-[0_0_15px_rgba(0,243,255,0.15)]"
                      : "bg-black/40 border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className={`w-5 h-5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-primary border-primary text-black"
                          : "border-muted-foreground group-hover:border-primary"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm leading-relaxed">{q.text}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5">
            <NeonCard glowColor={result.color} className={`p-8 ${result.bgClass} transition-all duration-500`}>
              <div className="flex justify-between items-center mb-6">
                <div className="font-orbitron text-xs font-bold text-muted-foreground tracking-widest uppercase">
                  Análisis del Negocio
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground text-xs font-exo">Urgencia:</span>
                  <span
                    className={`font-orbitron font-bold text-xs uppercase tracking-wider px-2 py-0.5 rounded ${
                      result.urgency === "Crítico" || result.urgency === "Alto"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : result.urgency === "Importante"
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {result.urgency}
                  </span>
                </div>
              </div>

              {/* Progress counter visual */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-orbitron font-bold text-white transition-all duration-300">
                  {score}
                </span>
                <span className="text-xl text-muted-foreground font-exo">/ 8</span>
                <span className="text-xs text-muted-foreground/80 font-exo italic ml-2">
                  problemas identificados
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / 8) * 100}%` }}
                  transition={{ duration: 0.3 }}
                  className={`h-full bg-gradient-to-r ${
                    score >= 5 ? "from-secondary to-purple-500" : "from-primary to-primary/80"
                  }`}
                />
              </div>

              <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                {result.title}
              </h3>

              <div className="p-3.5 rounded bg-black/30 border border-white/5 mb-6">
                <p className="font-exo text-xs text-white leading-relaxed">
                  <strong className="text-primary text-[10px] uppercase font-orbitron tracking-wider block mb-1">
                    Evaluación:
                  </strong>
                  {result.highlight}
                </p>
              </div>

              <p className="text-muted-foreground font-exo text-xs mb-8 leading-relaxed">
                {result.desc}
              </p>

              <NeonButton
                variant={result.color}
                className="w-full font-orbitron py-4 text-sm"
                glow
                onClick={() => window.open("https://calendly.com/imanagenteartificial/sesion-cotizacion-proyecto", "_blank")}
              >
                {result.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </NeonButton>

              <div className="mt-4 flex items-center justify-center gap-1 text-[10px] text-muted-foreground font-exo">
                <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                <span>Consultoría inicial de 30 minutos sin costo</span>
              </div>
            </NeonCard>
          </div>
        </div>
      </div>
    </section>
  );
}
