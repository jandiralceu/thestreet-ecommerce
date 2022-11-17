import { CartItem, QuantityOperationType } from "../../models";

export type CartContextProps = {
  itemsQuantity: number;
  subTotal: number;
  total: number;
  shippingPrice: number;
  discount: number;
  isEmpty: boolean;
  cartItems: Map<number, CartItem>;
  items: CartItem[];
  getTotalPriceByItem: (item: CartItem) => number;
  removeItem: (id: number) => void;
  addItem: (id: number, item: CartItem) => void;
  updateItemQuantity: (id: number, operation: QuantityOperationType) => void;
};

export enum CartActionTypes {
  setShippingPrice,
  setDiscount,
  addItem,
}

export interface IAction {
    type: CartActionTypes;
    payload: any;
  }
  
  export interface IState {
    shippingPrice: number
    discount: number;
    isEmpty: boolean;
    cartItems: Map<number, CartItem>;
    items: CartItem[];
  }