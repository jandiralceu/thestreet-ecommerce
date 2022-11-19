import { Product } from "../../models";
import { IProductRepository } from "../../repositories";

export interface IProductService {
  getAll(): Promise<Product[]>;
  getHomeHighlightProducts(): Promise<Product[]>;
  getRelatedProducts(slug: string): Promise<Product[]>;
  getBySlug(slug: string): Promise<Product | undefined>;
}

export class ProductService implements IProductService {
  #productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.#productRepository = productRepository;
  }
  getAll(): Promise<Product[]> {
    return this.#productRepository.getAll();
  }
  getBySlug(slug: string): Promise<Product | undefined> {
    return this.#productRepository.getBySlug(slug);
  }
  getHomeHighlightProducts(): Promise<Product[]> {
    return this.#productRepository.getHomeHighlightProducts();
  }
  getRelatedProducts(slug: string): Promise<Product[]> {
    return this.#productRepository.getRelatedProducts(slug);
  }
}
