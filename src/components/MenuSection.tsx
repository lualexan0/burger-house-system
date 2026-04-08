import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { MenuSection as MenuSectionType } from "@/data/menu";
import { useCart } from "@/contexts/CartContext";

interface MenuSectionProps {
  section: MenuSectionType;
  index: number;
}

const AddedFeedback = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-7 h-7 rounded-md bg-neon-purple/20 flex items-center justify-center text-neon-purple"
    >
      <Check className="w-4 h-4" />
    </motion.span>
  );
};

const MenuSectionComponent = ({ section, index }: MenuSectionProps) => {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const handleAdd = (item: MenuSectionType["items"][0]) => {
    addItem(item);
    setJustAdded(item.name);
    setTimeout(() => setJustAdded(null), 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="font-display text-3xl sm:text-4xl tracking-wider text-neon-purple neon-text-purple mb-6">
        {section.title}
      </h3>
      <div className="grid gap-3">
        {section.items.map((item) => (
          <div
            key={item.name}
            className={`group flex items-center justify-between gap-4 p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
              item.highlight
                ? "border-neon-orange/40 bg-neon-orange/5 neon-border-orange hover:bg-neon-orange/10"
                : "border-border bg-card hover:border-neon-purple/40 hover:bg-neon-purple/5"
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-foreground group-hover:text-neon-purple transition-colors">
                  {item.name}
                </h4>
                {item.highlight && (
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-medium">
                    ⭐ Destaque
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-display text-xl text-neon-orange tracking-wide">{item.price}</span>
              {justAdded === item.name ? (
                <AddedFeedback show />
              ) : (
                <button
                  onClick={() => handleAdd(item)}
                  className="w-7 h-7 rounded-md bg-neon-purple/20 text-neon-purple flex items-center justify-center hover:bg-neon-purple/40 transition-colors"
                  aria-label={`Adicionar ${item.name}`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuSectionComponent;
