import { motion } from "framer-motion";
import { Flame, Eye, MessageCircle, Zap, Sparkles, Heart } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Jornadas da Fênix",
    tag: "Treinamento",
    description: "Renasça das cinzas com este poderoso treinamento de transformação pessoal e espiritual.",
  },
  {
    icon: Zap,
    title: "Fluxo Quântico",
    tag: "Treinamento",
    description: "Acesse estados elevados de consciência e desbloqueie seu potencial quântico interior.",
  },
  {
    icon: Eye,
    title: "Chamada de Vídeo",
    tag: "Consulta",
    description: "Sessões personalizadas e profundas no conforto da sua casa, 100% online.",
  },
  {
    icon: MessageCircle,
    title: "Consulta aos Mentores",
    tag: "Canalização",
    description: "Faça perguntas diretamente aos seus mentores espirituais e receba orientações.",
  },
  {
    icon: Heart,
    title: "Ente Querido",
    tag: "Canalização",
    description: "Reconecte-se com entes queridos que já partiram através de canalizações amorosas.",
  },
  {
    icon: Sparkles,
    title: "Limpezas Energéticas",
    tag: "Energia",
    description: "Liberte-se de energias densas e padrões negativos com limpezas profundas.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-body mb-4 block font-medium">
              Serviços
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4 leading-tight">
              Caminhos para sua{" "}
              <span className="text-gradient-purple italic">transformação</span>
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Todos os serviços são realizados 100% online.
            </p>
            <a
              href="https://wa.me/5511944131010?text=Tenho%20interesse%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors group"
            >
              Agendar sessão
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Right - service cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-background rounded-xl p-6 border border-border hover:border-primary/25 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <service.icon className="w-5 h-5 text-primary/70" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body bg-muted px-2 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
