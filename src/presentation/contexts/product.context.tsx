import {
  createContext,
  useContext,
  PropsWithChildren,
  useEffect,
  useCallback,
  useReducer,
} from "react";

import { Product } from "../../models";
import { ProductService } from "../../services";
import { ProductRepository } from "../../repositories";
import {
  ProductContextProps,
  IAction,
  IState,
  ProductActionTypes,
} from "./product.context.props";

const ProductContext = createContext<ProductContextProps>({
  products: [],
  categories: [],
  productsQuantity: 0,
  findById: (slug: string) => null
});

const productReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ProductActionTypes.setProducts:
      return {
        ...state,
        products: action.payload,
        productsQuantity: action.payload.length
      };
    case ProductActionTypes.setCategories:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

const INITIAL_STATE: IState = {
  products: [],
  categories: [],
  productsQuantity: 0,
};

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const productService = new ProductService(new ProductRepository());
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);

  const getCategories = useCallback(async () => {
    const productsAndCategories = await productService.getAll();

    let products: Product[] = [];

    Array.from(productsAndCategories.values()).forEach((product) => {
      return products.push(...product);
    });

    dispatch({ type: ProductActionTypes.setProducts, payload: products });
    dispatch({
      type: ProductActionTypes.setCategories,
      payload: Array.from(productsAndCategories.keys()),
    });
  }, []);

  const findById = useCallback((slug: string): Product | null => {
    const result = state.products.find((product) => product.id.toString() === slug);
    return result ?? null;
  }, [state.products]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <ProductContext.Provider
      value={{
        findById,
        products: state.products,
        categories: state.categories,
        productsQuantity: state.productsQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
