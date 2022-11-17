import { Product, ProductCategoryID } from "../../models";
import { getCategoriesAndDocuments } from "../../infra";

export interface IProductRepository {
  getAll(): Promise<Promise<Map<ProductCategoryID, Product[]>>>;
}

export class ProductRepository implements IProductRepository {
  async getAll(): Promise<Promise<Map<ProductCategoryID, Product[]>>> {
    try {
      return await getCategoriesAndDocuments();
    } catch (error) {
      throw error;
    }
  }
}
