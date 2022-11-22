import { User } from "../../models";
import { IUserRepository } from "../../repositories";

export interface IUserService {
  getCurrentUser(): Promise<User>;
}

export class UserService implements IUserService {
  #userRepository: IUserRepository;

  constructor(authRepository: IUserRepository) {
    this.#userRepository = authRepository;
  }

  async getCurrentUser(): Promise<User> {
    return this.#userRepository.getCurrentUser();
  }
}
