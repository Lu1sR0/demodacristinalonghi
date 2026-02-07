import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-light/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <Sparkles className="w-8 h-8 text-primary/40 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Pronta para iniciar sua{" "}
            <span className="text-gradient-purple">jornada</span>?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Dê o primeiro passo em direção à sua transformação espiritual. Entre em contato e agende sua sessão.
          </p>
          <a
            href="https://wa.me/5511944131010?text=Tenho%20interesse%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase font-semibold hover:scale-105 transition-transform duration-300 glow-purple"
          >
            <MessageCircle className="w-5 h-5" />
            Fale pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
