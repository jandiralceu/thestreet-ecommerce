import { Product, ProductCategoryID } from "../../models";

export enum ProductActionTypes {
  setProducts,
  setCategories,
}

export interface IAction {
  type: ProductActionTypes;
  payload: any;
}

export interface IState {
  products: Product[];
  categories: ProductCategoryID[];
  productsQuantity: number
}

export type ProductContextProps = {
  products: Product[];
  categories: ProductCategoryID[];
  productsQuantity: number
};
