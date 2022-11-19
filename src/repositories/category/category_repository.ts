import { Category } from "../../models";
import { getCategoriesAndDocuments } from "../../infra";

export interface ICategoryRepository {
  getAll(): Promise<Category[]>;
}

export class CategoryRepository implements ICategoryRepository {
  async getAll(): Promise<Category[]> {
    try {
      const result = await getCategoriesAndDocuments();
      return Array.from(result.keys());
    } catch (error) {
      throw error;
    }
  }
}
