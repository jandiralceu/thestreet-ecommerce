import { createContext, useContext, PropsWithChildren, useState } from "react";
import { Product } from "../../models";

import PRODUCTS from "../../mocks/shop-data.json";

type ProductContextProps = {
  products?: Product[];
};

const ProductContext = createContext<ProductContextProps>({});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
