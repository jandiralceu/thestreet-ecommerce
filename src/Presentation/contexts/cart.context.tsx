import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useMemo,
  useCallback,
} from "react";
import { CartItem, QuantityOperationType } from "../../models";

type CartContextProps = {
  itemsQuantity: number;
  subTotal: number;
  total: number;
  shippingPrice: number,
  discount: number;
  isEmpty: boolean;
  cartItems: Map<number, CartItem>;
  items: CartItem[];
  getTotalPriceByItem: (item: CartItem) => number
  removeItem: (id: number) => void;
  addItem: (id: number, item: CartItem) => void;
  updateItemQuantity: (id: number, operation: QuantityOperationType) => void;
};

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

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [shippingPrice, setShippingPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [cartItems, setCartItems] = useState<Map<number, CartItem>>(new Map());
  const items = useMemo(() => Array.from(cartItems.values()), [cartItems]);
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

    setCartItems(itemsCopy);
  };

  const updateItemQuantity = (id: number, operation: QuantityOperationType) => {
    const itemsCopy = new Map(cartItems);
    let currentItem = itemsCopy.get(id);

    if (!currentItem || (operation == QuantityOperationType.subtract && currentItem.quantity == 1)) return;

    operation == QuantityOperationType.subtract ? currentItem.quantity-- : currentItem.quantity++;

    setCartItems(itemsCopy.set(id, currentItem!));
  };

  const removeItem = (id: number) => {
    const itemsCopy = new Map(cartItems);

    if (itemsCopy.delete(id)) setCartItems(itemsCopy);
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
