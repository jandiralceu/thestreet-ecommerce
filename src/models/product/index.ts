export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CartItem = {
  quantity: number;
} & Product;

export enum QuantityOperationType {
  add, 
  subtract,
}