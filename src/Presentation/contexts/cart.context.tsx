import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useMemo,
} from "react";
import { CartItem } from "../../models";

type CartContextProps = {
  itemsQuantity: number;
  total: number;
  cartItems: Map<number, CartItem>;
  items: CartItem[];
  removeItem: (id: number) => void;
  addItem: (id: number, item: CartItem) => void;
  updateItemQuantity: (id: number, newQuantity: number) => void;
};

const CartContext = createContext<CartContextProps>({
  itemsQuantity: 0,
  total: 0,
  items: [],
  cartItems: new Map(),
  removeItem: (id: number) => {},
  addItem: (id: number, item: CartItem) => {},
  updateItemQuantity: (id: number, newQuantity: number) => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<Map<number, CartItem>>(new Map());

  const items = useMemo(() => Array.from(cartItems.values()), [cartItems]);
  const itemsQuantity = useMemo(() => {
    return items.reduce((quantity, item) => quantity + item.quantity, 0);
  }, [items]);
  const total = useMemo(() => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [items]);

  const addItem = (id: number, item: CartItem) => {
    const itemsCopy = { ...cartItems };
    const currentItem = itemsCopy.get(id);

    if (currentItem) {
      itemsCopy.set(id, {
        ...item,
        quantity: currentItem.quantity + item.quantity,
      });
    } else {
      itemsCopy.set(id, item);
    }

    setCartItems(itemsCopy);
  };

  const updateItemQuantity = (id: number, newQuantity: number) => {
    const itemsCopy = { ...cartItems };
    const currentItem = itemsCopy.get(id);

    if (currentItem) {
      setCartItems(itemsCopy.set(id, { ...currentItem, quantity: newQuantity }));
    }
  };

  const removeItem = (id: number) => {
    const itemsCopy = { ...cartItems };

    if (itemsCopy.delete(id)) {
      setCartItems(itemsCopy);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        updateItemQuantity,
        removeItem,
        itemsQuantity,
        total,
        items,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
