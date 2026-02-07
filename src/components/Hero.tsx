import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroAccent from "@/assets/hero-accent.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image - Premium Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAccent}
          alt="Soul Journeys"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Main Content - Centered Premium Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl">
      
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.15] mb-6 text-white drop-shadow-lg"
        >
          Conecte-se com{" "}
          <span className="text-gradient-purple italic">sua essência</span>{" "}
          mais profunda
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-base md:text-lg text-white/85 max-w-2xl mb-12 leading-relaxed drop-shadow-md"
        >
          Terapia espiritual, canalização de mentores e acesso a memórias de vidas
          passadas. Transforme sua vida 100% online, de onde você estiver no mundo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16"
        >
          <motion.a
            href="https://wa.me/5511944131010?text=Tenho%20interesse%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-[0.1em] uppercase font-semibold relative overflow-hidden group shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300" />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Agendar Sessão</span>
          </motion.a>

          <motion.a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 text-white font-body text-sm tracking-[0.1em] uppercase font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Conhecer Serviços</span>
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
      >
        <p className="font-body text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
          Veja Mais
        </p>
        <ArrowDown className="w-6 h-6 text-white/60 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
