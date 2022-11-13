import { User } from "firebase/auth";
import { IAuthRepository } from "../../repositories";

export interface IAuthService {
  loginWithGoogle(): Promise<User>;
  login(email: string, password: string): Promise<User>;
  registerWithEmailAndPassword(email: string, password: string, name: string): Promise<User>;
}

export class AuthService implements IAuthService {
  #authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.#authRepository = authRepository;
  }

  registerWithEmailAndPassword(email: string, password: string, name: string): Promise<User> {
    return this.#authRepository.registerWithEmailAndPassword(email, password, name);
  }

  async loginWithGoogle(): Promise<User> {
    return this.#authRepository.loginWithGoogle();
  }

  async login(email: string, password: string): Promise<User> {
    return this.#authRepository.login(email, password);
  }
}
