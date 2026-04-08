export const WHATSAPP_LINK = "https://wa.me/message/L6H4DVGH7XT4I1";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  highlight?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const hamburgueres: MenuSection = {
  title: "🍔 Hambúrgueres",
  items: [
    { name: "X-Burger Kids", description: "Pão, hambúrguer, queijo e ketchup", price: "R$ 9,00" },
    { name: "X-Burger", description: "Pão, hambúrguer, presunto, queijo, alface, tomate e molho especial", price: "R$ 15,00" },
    { name: "X-Egg", description: "Pão, hambúrguer, ovo, presunto, queijo, alface, tomate e molho especial", price: "R$ 17,00" },
    { name: "X-Bacon", description: "Pão, hambúrguer, bacon, presunto, queijo, alface, tomate e molho especial", price: "R$ 19,00" },
    { name: "X-Egg Bacon", description: "Pão, hambúrguer, ovo, bacon, presunto, queijo, alface, tomate e molho especial", price: "R$ 21,00" },
    { name: "X-Tudo", description: "Pão, hambúrguer, ovo, bacon, presunto, queijo, calabresa, alface, tomate, milho e molho especial", price: "R$ 23,00", highlight: true },
    { name: "X-Duplo", description: "Pão, 2 hambúrgueres, presunto, 2 queijos, alface, tomate e molho especial", price: "R$ 25,00" },
    { name: "X-Triplo", description: "Pão, 3 hambúrgueres, presunto, 3 queijos, alface, tomate e molho especial", price: "R$ 30,00", highlight: true },
    { name: "X-Picanha", description: "Pão, hambúrguer de picanha, presunto, queijo, alface, tomate e molho especial", price: "R$ 23,00" },
    { name: "X-Picanha Bacon", description: "Pão, hambúrguer de picanha, bacon, presunto, queijo, alface, tomate e molho especial", price: "R$ 25,00" },
    { name: "X-Picanha Tudo", description: "Pão, hambúrguer de picanha, ovo, bacon, presunto, queijo, calabresa, alface, tomate, milho e molho especial", price: "R$ 28,00", highlight: true },
  ],
};

export const batatas: MenuSection = {
  title: "🍟 Batatas Fritas",
  items: [
    { name: "Batata Frita Tradicional P", description: "Porção pequena de batata frita crocante", price: "R$ 8,00" },
    { name: "Batata Frita Tradicional M", description: "Porção média de batata frita crocante", price: "R$ 12,00" },
    { name: "Batata Frita Tradicional G", description: "Porção grande de batata frita crocante", price: "R$ 16,00" },
    { name: "Batata Cheddar", description: "Batata frita com cheddar cremoso", price: "R$ 18,00", highlight: true },
    { name: "Batata Catupiry", description: "Batata frita com catupiry", price: "R$ 18,00" },
    { name: "Batata Calabresa", description: "Batata frita com calabresa acebolada", price: "R$ 18,00" },
    { name: "Batata Bacon", description: "Batata frita com bacon crocante", price: "R$ 18,00" },
  ],
};

export const bebidas: MenuSection = {
  title: "🥤 Bebidas",
  items: [
    { name: "Guarcamp 1L", description: "Guaraná natural", price: "R$ 6,00" },
    { name: "Guarcamp 2L", description: "Guaraná natural", price: "R$ 10,00" },
    { name: "Refrigerante Lata", description: "Coca-Cola, Guaraná, Fanta, Sprite", price: "R$ 5,00" },
    { name: "Refrigerante 600ml", description: "Coca-Cola, Guaraná, Fanta, Sprite", price: "R$ 7,00" },
    { name: "Refrigerante 1L", description: "Coca-Cola, Guaraná", price: "R$ 9,00" },
    { name: "Refrigerante 2L", description: "Coca-Cola, Guaraná", price: "R$ 12,00" },
    { name: "Água Mineral 500ml", description: "Com ou sem gás", price: "R$ 3,00" },
    { name: "Suco Natural", description: "Consulte sabores disponíveis", price: "R$ 8,00" },
  ],
};
