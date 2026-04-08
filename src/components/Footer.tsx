import { MessageCircle, Instagram, Phone, MapPin, Clock } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/menu";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-display text-2xl tracking-wider text-neon-purple neon-text-purple mb-4">
              BURGER HOUSE
            </h4>
            <p className="text-muted-foreground text-sm">O verdadeiro sabor do Rio de Janeiro, direto na sua casa.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-neon-orange" />
              Quarta a Domingo • 18h às 23h
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-neon-orange" />
              Delivery — Rio de Janeiro
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-neon-orange" />
              (21) 96775-0530
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-neon-purple transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Peça pelo WhatsApp
            </a>
            <a
              href="https://instagram.com/burger_house.rj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-neon-purple transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @burger_house.rj
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Burger House. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
