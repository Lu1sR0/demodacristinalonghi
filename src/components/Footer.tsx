import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="py-20 border-t border-border relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="Cristina Longhi" className="h-14 mb-4" />
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Ajudo você a se comunicar com mentores espirituais e acessar memórias de vidas passadas.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/jornadasdaalma/" },
                { icon: Facebook, href: "https://www.facebook.com/ayahuascajornadasdaalma" },
                { icon: MessageCircle, href: "https://wa.me/5511944131010?text=Tenho%20interesse%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" },
                { icon: Send, href: "https://t.me/jornadasdaalma" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-accent transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-xl text-foreground mb-4">Institucional</h4>
            <nav className="flex flex-col gap-3">
              {["Início", "Sobre", "Serviços", "Agenda", "Contato"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-xl text-foreground mb-4">Serviços</h4>
            <nav className="flex flex-col gap-3">
              {[
                "Treinamento Jornadas da Fênix",
                "Treinamento Fluxo Quântico",
                "Consulta via Vídeo",
                "Consulta aos Mentores",
                "Canalização de Ente Querido",
                "Limpezas Energéticas",
              ].map((s) => (
                <a
                  key={s}
                  href="#servicos"
                  className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-body text-xs tracking-wider">
            © 2025 Jornadas da Alma — Cristina Longhi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
