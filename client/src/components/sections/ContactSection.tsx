import { motion } from "framer-motion";
import { NeonCard } from "@/components/ui/neon-card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-24 relative overflow-hidden" id="contacto">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-white">
                        Contacto <span className="text-primary">Directo</span>
                    </h2>
                    <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
                        Estamos listos para atenderte.
                    </p>
                </motion.div>

                <NeonCard className="max-w-5xl mx-auto bg-black/60 border-primary/20 p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/593998452083"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                                <Phone className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-muted-foreground font-exo group-hover:text-primary transition-colors">
                                +593 99 845 2083
                            </p>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:info@imanai.com"
                            className="flex flex-col items-center text-center group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors border border-secondary/20 shadow-[0_0_15px_rgba(188,19,254,0.2)]">
                                <Mail className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-white mb-2">Correo</h3>
                            <p className="text-muted-foreground font-exo group-hover:text-secondary transition-colors">
                                imanagenteartificial@gmail.com
                            </p>
                        </motion.a>

                        {/* Address */}
                        <motion.div
                            className="flex flex-col items-center text-center group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                                <MapPin className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-white mb-2">Dirección</h3>
                            <p className="text-muted-foreground font-exo max-w-[200px]">
                                Quito Ecuador, Bellavista Gonzales Suarez y F Ayarza
                            </p>
                        </motion.div>
                    </div>
                </NeonCard>
            </div>
        </section>
    );
}