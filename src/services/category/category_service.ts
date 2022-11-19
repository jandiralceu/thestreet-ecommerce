import { Category } from "../../models";
import { ICategoryRepository } from "../../repositories";

export interface ICategoryService {
  getAll(): Promise<Category[]>;
}

export class CategoryService implements ICategoryService {
  #categoryRepository: ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.#categoryRepository = categoryRepository;
  }
  getAll(): Promise<Category[]> {
    return this.#categoryRepository.getAll();
  }
}
