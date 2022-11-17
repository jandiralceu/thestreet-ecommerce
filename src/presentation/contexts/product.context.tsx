import { createContext, useContext, PropsWithChildren, useState, useEffect, useCallback } from "react";
import { Product, ProductCategoryID } from "../../models";

import { getCategoriesAndDocuments } from "../../infra";

type ProductContextProps = {
  products?: Product[];
  productCategories: ProductCategoryID[];
};

const ProductContext = createContext<ProductContextProps>({
  productCategories: [],
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>();
  const [productCategories, setProductCategories] = useState<ProductCategoryID[]>([]);

  const getCategories = useCallback(async () => {
    const productsAndCategories = await getCategoriesAndDocuments();
    const productsValues = Array.from(productsAndCategories.values());
    const categoriesValues = Array.from(productsAndCategories.keys());

    let result: Product[] = [];
    productsValues.forEach(product => result.push(...product));
    
    setProducts(result);
    setProductCategories(categoriesValues);
  }, [])

  useEffect(() => {
    getCategories();
  }, [getCategories])

  return (
    <ProductContext.Provider value={{ products, productCategories }}>
      {children}
    </ProductContext.Provider>
  );
};
