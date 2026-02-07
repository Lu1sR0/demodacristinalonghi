import { motion } from "framer-motion";
import { Heart, BookOpen, Radio, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const milestones = [
  { year: "1995", text: "Primeiro curso de desenvolvimento pessoal aos 16 anos", icon: "" },
  { year: "2011", text: "Programa Jornadas com Cristina Longhi na Rádio", icon: "" },
  { year: "2019", text: "Autora de 5 livros sobre desenvolvimento espiritual", icon: "" },
  { year: "2024", text: "Criou o Método Longhi de Epigenética Transformativa", icon: "" },
];

const expertise = [
  { title: "Mediadora Espiritual", description: "Intermediação com Mentores, Entes Queridos e Vidas Passadas", icon: Heart },
  { title: "Terapeuta Holística", description: "Reiki, Registros Akáshicos, Cura Prânica", icon: Sparkles },
  { title: "Comportamental", description: "PNL, Hipnose, Coaching, Epigenética", icon: BookOpen },
  { title: "Comunicadora", description: "Rádio Vibe Mundial há 13 anos", icon: Radio },
];

const About = () => {
  return (
    <section id="sobre" className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-background via-background/50 to-background">
      {/* Animated background elements */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-30" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-body font-medium">
              Conhecer
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-6">
            Cristina Longhi
          </h2>

          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Terapeuta há 29 anos. Autora de 5 livros. Criadora do Método Longhi de Epigenética Transformativa.
            Especializada em conectar você aos seus Mentores Espirituais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Image column - Premium card with multiple layers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-purple-500/10 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 backdrop-blur-sm">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    alt="Cristina Longhi - Terapeuta Espiritual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/lovable-uploads/baab719f-494a-42d2-9a9e-69c514652fe7.png"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-6 left-6 px-4 py-3 rounded-full bg-white/95 backdrop-blur-sm shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-sm font-semibold text-foreground">29 anos de Prática</p>
                </motion.div>
              </div>

              {/* Accent borders */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            {/* Main description with enhanced styling */}
            <div className="mb-10">
              <p className="text-foreground/90 font-body text-lg md:text-xl leading-relaxed mb-6">
                Aos 14 anos, senti um chamado para entender como as coisas funcionam. Meu primeiro curso foi aos 16 anos e desde então nunca parei de estudar. Minha missão sempre foi clara: <span className="font-semibold text-primary">melhorar a vida das pessoas</span>.
              </p>

              <p className="text-foreground/75 font-body text-lg leading-relaxed mb-8">
                Atuo há 29 anos ajudando pessoas do mundo todo a se reconectarem com seus Mentores Espirituais, entenderem suas vidas passadas e resolverem traumas, medos e inseguranças. Sou autora de 5 livros, apresentadora de rádio há 13 anos e criei o Método Longhi de Epigenética Transformativa.
              </p>

              {/* Personal note */}
              <motion.div
                className="p-6 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-sm mb-10"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-foreground/80 text-lg font-light">
                  Moro em São Paulo, estou no meu segundo casamento e tenho três filhos. Já morei 6 anos nos EUA e viajo constantemente para realizar vivências terapêuticas no Egito, Índia, Peru e México.
                </p>
              </motion.div>
            </div>

            {/* Expertise cards */}
            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-6">O que faço</h3>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((area, i) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-xl bg-white/5 border border-primary/10 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
                        <p className="text-sm font-semibold text-foreground">{area.title}</p>
                      </div>
                      <p className="text-xs text-foreground/60">{area.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Timeline - Redesigned */}
            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-8">Marcos importantes</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

                {/* Timeline items */}
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="pl-10 relative group"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background"
                        whileHover={{ scale: 1.3 }}
                      />

                      <div className="p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                        <p className="font-display text-xl font-light text-primary mb-1">{m.year}</p>
                        <p className="font-body text-sm text-foreground/70 flex items-center gap-2">
                          <span>{m.icon}</span>
                          {m.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://wa.me/5511944131010?text=Tenho%20interesse%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-primary to-purple-500 text-primary-foreground font-body font-semibold text-sm tracking-[0.1em] uppercase group relative overflow-hidden shadow-xl hover:shadow-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300" />
                <span className="relative z-10">Agendar Sessão</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;