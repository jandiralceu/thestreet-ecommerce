import { User } from "../../models";
import { IAuthRepository } from "../../repositories";

export interface IAuthService {
  signInWithGoogle(): Promise<User>;
}

export class AuthService implements IAuthService {
  #authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.#authRepository = authRepository;
  }

  async signInWithGoogle(): Promise<User> {
    return this.#authRepository.signInWithGoogle();
  }
}
