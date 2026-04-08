import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { MenuItem } from "@/data/menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  buildWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(price: string): number {
  return parseFloat(price.replace("R$", "").replace(".", "").replace(",", ".").trim());
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((ci) => ci.item.name === item.name);
      if (existing) {
        return prev.map((ci) =>
          ci.item.name === item.name ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((name: string) => {
    setItems((prev) => prev.filter((ci) => ci.item.name !== name));
  }, []);

  const updateQuantity = useCallback((name: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((ci) => ci.item.name !== name));
    } else {
      setItems((prev) =>
        prev.map((ci) => (ci.item.name === name ? { ...ci, quantity } : ci))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0);
  const totalPrice = items.reduce(
    (sum, ci) => sum + parsePrice(ci.item.price) * ci.quantity,
    0
  );

  const buildWhatsAppMessage = useCallback(() => {
    const lines = ["🍔 *Pedido Burger House*", ""];
    items.forEach((ci) => {
      lines.push(`• ${ci.quantity}x ${ci.item.name} — ${ci.item.price}`);
    });
    lines.push("");
    lines.push(
      `*Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}*`
    );
    return encodeURIComponent(lines.join("\n"));
  }, [items, totalPrice]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, buildWhatsAppMessage }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
