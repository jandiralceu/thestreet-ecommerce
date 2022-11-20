export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  promotionalPrice: number | null
};

export type CartItem = {
  quantity: number;
} & Product;
