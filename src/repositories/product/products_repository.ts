import { Product } from "../../models";
import { getCategoriesAndDocuments } from "../../infra";

export interface IProductRepository {
  getAll(): Promise<Product[]>;
  getBySlug(slug: string): Promise<Product | undefined>;
  getHomeHighlightProducts(): Promise<Product[]>;
  getRelatedProducts(slug: string): Promise<Product[]>;
}

export class ProductRepository implements IProductRepository {
  async getBySlug(slug: string): Promise<Product | undefined> {
    try {
      const result = await this.getAll();
      return result.find((product) => product.id.toString() === slug);
    } catch(error) {
      throw error;
    }
  }

  async getHomeHighlightProducts(): Promise<Product[]> {
    try {
      const result = await this.getAll();
      return result.slice(0, 4);
    } catch(error) {
      throw error;
    }
  }

  async getRelatedProducts(slug: string): Promise<Product[]> {
    try {
      const result = await this.getAll();
      return result.slice(0, 4);
    } catch(error) {
      throw error;
    }
  }

  async getAll(): Promise<Product[]> {
    try {
      const result = await getCategoriesAndDocuments();
      const products: Product[] = [];

      Array.from(result.values()).forEach((items) => {
        products.push(...items);
      });

      return products;
    } catch (error) {
      throw error;
    }
  }
}
