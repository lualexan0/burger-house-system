import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const WHATSAPP_BASE = "https://wa.me/5521967750530";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart, buildWhatsAppMessage } = useCart();

  const handleSendOrder = () => {
    const msg = buildWhatsAppMessage();
    window.open(`${WHATSAPP_BASE}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Floating cart button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-secondary text-secondary-foreground p-4 rounded-full neon-glow-orange hover:scale-110 transition-transform"
        aria-label="Abrir carrinho"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-neon-purple text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse-neon">
            {totalItems}
          </span>
        )}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-card border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-display text-2xl tracking-wider text-neon-purple neon-text-purple">
                SEU PEDIDO
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingCart className="w-12 h-12 mb-4 opacity-30" />
                  <p>Seu carrinho está vazio</p>
                  <p className="text-sm mt-1">Adicione itens do cardápio</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((ci) => (
                    <div
                      key={ci.item.name}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/30"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground truncate">{ci.item.name}</p>
                        <p className="text-xs text-muted-foreground">{ci.item.price}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => updateQuantity(ci.item.name, ci.quantity - 1)}
                          className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">{ci.quantity}</span>
                        <button
                          onClick={() => updateQuantity(ci.item.name, ci.quantity + 1)}
                          className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => removeItem(ci.item.name)}
                          className="w-7 h-7 rounded-md flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors ml-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-display text-2xl text-neon-orange tracking-wide">
                    R$ {totalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <button
                  onClick={handleSendOrder}
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3.5 rounded-lg font-semibold neon-glow-orange hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar pedido pelo WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors py-2"
                >
                  Limpar carrinho
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
