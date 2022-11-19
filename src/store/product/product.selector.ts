import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.product?.products;
export const selectProductsQuantity = (state: RootState) =>
  state.product?.products?.length ?? 0;
export const selectProduct = (state: RootState, slug: string) =>
  state.product?.products?.find((product) => product.id.toString() === slug);
