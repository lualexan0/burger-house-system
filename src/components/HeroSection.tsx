import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import { WHATSAPP_LINK } from "@/data/menu";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal da Burger House"
          className="w-full h-full object-cover"
          width={1024}
          height={1024}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Neon ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-orange/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-wider text-foreground neon-text-purple mb-2">
            BURGER HOUSE
          </h1>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl tracking-widest text-neon-orange neon-text-orange mb-8">
            O VERDADEIRO SABOR DO RIO
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg neon-glow-orange transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <MessageCircle className="w-6 h-6" />
            Peça agora pelo WhatsApp
          </a>
          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 border border-neon-purple/50 text-foreground px-8 py-4 rounded-lg font-semibold text-lg neon-border-purple transition-all duration-300 hover:scale-105 hover:bg-neon-purple/10"
          >
            Ver Cardápio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground text-sm"
        >
          <span className="flex items-center gap-2">
            🕐 Quarta a Domingo • 18h às 23h
          </span>
          <span className="flex items-center gap-2">
            📍 Delivery — Rio de Janeiro
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
