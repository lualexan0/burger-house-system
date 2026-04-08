import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MenuSectionComponent from "@/components/MenuSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/contexts/CartContext";
import { hamburgueres, batatas, bebidas } from "@/data/menu";

const Index = () => {
  const sections = [hamburgueres, batatas, bebidas];

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />

        {/* Menu */}
        <section id="cardapio" className="py-16 sm:py-24">
          <div className="container px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-5xl sm:text-6xl tracking-wider text-foreground neon-text-purple mb-3">
                CARDÁPIO
              </h2>
              <p className="text-muted-foreground">Adicione itens ao carrinho e envie seu pedido pelo WhatsApp</p>
            </motion.div>

            {sections.map((section, i) => (
              <MenuSectionComponent key={section.title} section={section} index={i} />
            ))}
          </div>
        </section>

        <CartDrawer />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
