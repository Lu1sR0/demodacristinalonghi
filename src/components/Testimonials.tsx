import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Maria Clara S.",
    role: "Empreendedora",
    text: "A sessão com Cristina mudou minha vida. Consegui me reconectar com minha essência e encontrar a clareza que buscava há anos.",
    stars: 5,
  },
  {
    name: "Ana Paula R.",
    role: "Psicoterapeuta",
    text: "O treinamento com Cristina foi transformador. Ela tem um dom incrível de nos guiar com amor e sabedoria.",
    stars: 5,
  },
  {
    name: "Roberto M.",
    role: "Consultor",
    text: "A canalização do meu pai foi emocionante e muito reconfortante. Cristina é uma profissional sensível e comprometida.",
    stars: 5,
  },
  {
    name: "Juliana T.",
    role: "Designer",
    text: "Descobri memórias de vidas passadas que explicaram muitos medos e bloqueios que eu tinha. Agora vivo com mais liberdade.",
    stars: 5,
  },
  {
    name: "Felipe L.",
    role: "Executivo",
    text: "As orientações dos Mentores que Cristina canalizou foram precisas e transformaram minha visão sobre sucesso e propósito.",
    stars: 5,
  },
  {
    name: "Beatriz N.",
    role: "Professora",
    text: "Cristina me ajudou a entender a relação com minha mãe através de trabalho energético. Minha vida melhorou muito depois.",
    stars: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length);
    }
    return indices.map((idx) => testimonials[idx]);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="depoimentos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            O que as pessoas dizem
          </h2>
          <p className="text-foreground/60 text-lg">
            Histórias e experiências reais de quem passou pela transformação
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-96 flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0 flex gap-8 items-center justify-center">
            {visibleTestimonials.map((t, idx) => {
              const positions = [-1, 0, 1];
              const position = positions[idx];
              const isCenter = position === 0;

              return (
                <motion.div
                  key={`${current}-${idx}`}
                  initial={{ opacity: 0, x: position === -1 ? -400 : position === 1 ? 400 : 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.3, 
                    x: position * 420, 
                    scale: isCenter ? 1 : 0.85 
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`w-full max-w-lg flex-shrink-0 ${isCenter ? "z-10" : "z-0"}`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 h-full flex flex-col">
                    {/* Quote icon */}
                    <Quote className="w-6 h-6 text-primary/30 mb-4" />

                    {/* Text */}
                    <p className="text-foreground/80 font-body text-base leading-relaxed mb-6 flex-grow">
                      "{t.text}"
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Author */}
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-foreground/60">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current ? "bg-primary w-8" : "bg-primary/30 w-2"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5511944131010?text=Tenho%20interesse%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-[0.1em] uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar Sessão
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
