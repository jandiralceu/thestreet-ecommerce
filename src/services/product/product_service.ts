import { Product, ProductCategoryID } from "../../models";
import { IProductRepository } from "../../repositories";

export interface IProductService {
  getAll(): Promise<Promise<Map<ProductCategoryID, Product[]>>>;
}

export class ProductService implements IProductService {
  #productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.#productRepository = productRepository;
  }

  getAll(): Promise<Promise<Map<ProductCategoryID, Product[]>>> {
    return this.#productRepository.getAll();
  }
}
