import {
  createContext,
  useContext,
  PropsWithChildren,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import { CartItem, QuantityOperationType } from "../../models";

import { CartActionTypes, CartContextProps, IAction, IState } from './cart.context.props';

const CartContext = createContext<CartContextProps>({
  itemsQuantity: 0,
  subTotal: 0,
  total: 0,
  shippingPrice: 0,
  discount: 0,
  items: [],
  isEmpty: false,
  cartItems: new Map(),
  removeItem: (id: number) => {},
  getTotalPriceByItem: (item: CartItem) => 0,
  addItem: (id: number, item: CartItem) => {},
  updateItemQuantity: (id: number, operation: QuantityOperationType) => {},
});

const cartReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case CartActionTypes.setDiscount:
      return {
        ...state,
        discount: action.payload,
      }
    case CartActionTypes.setShippingPrice:
      return {
        ...state,
        shippingPrice: action.payload,
      }
    case CartActionTypes.addItem:
      return {
        ...state,
        cartItems: action.payload,
        items: Array.from(action.payload.values()),
      }
    default:
      return state;
  }
}

const INITIAL_STATE: IState = {
  cartItems: new Map(),
  discount: 0,
  isEmpty: true,
  items: [],
  shippingPrice: 0,
}

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { discount, shippingPrice, cartItems, items } = state;

  const itemsQuantity = useMemo(() => {
    return items.reduce((quantity, item) => quantity + item.quantity, 0);
  }, [items]);
  const subTotal = useMemo(() => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [items]);
  const isEmpty = useMemo(() => !items.length, [items]);
  const getTotalPriceByItem = useCallback((item: CartItem) => item.price * item.quantity, []);
  const total = useMemo(() => subTotal + shippingPrice - discount, [subTotal, shippingPrice, discount]);

  const addItem = (id: number, item: CartItem) => {
    const itemsCopy = new Map(cartItems);
    const currentItem = itemsCopy.get(id);

    if (currentItem) {
      itemsCopy.set(id, {
        ...item,
        quantity: currentItem.quantity + item.quantity,
      });
    } else {
      itemsCopy.set(id, item);
    }

    dispatch({ type: CartActionTypes.addItem, payload: itemsCopy });
  };

  const updateItemQuantity = (id: number, operation: QuantityOperationType) => {
    const itemsCopy = new Map(cartItems);
    let currentItem = itemsCopy.get(id);

    if (!currentItem || (operation == QuantityOperationType.subtract && currentItem.quantity == 1)) return;

    operation == QuantityOperationType.subtract ? currentItem.quantity-- : currentItem.quantity++;

    dispatch({ type: CartActionTypes.addItem, payload: itemsCopy.set(id, currentItem!) })
  };

  const removeItem = (id: number) => {
    const itemsCopy = new Map(cartItems);

    if (itemsCopy.delete(id)) {
      dispatch({ type: CartActionTypes.addItem, payload: itemsCopy });
    }
  };

  return (
    <CartContext.Provider
      value={{
        isEmpty,
        cartItems,
        addItem,
        updateItemQuantity,
        removeItem,
        itemsQuantity,
        subTotal,
        items,
        total,
        shippingPrice,
        discount,
        getTotalPriceByItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
