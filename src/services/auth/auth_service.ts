import { User } from "firebase/auth";
import { IAuthRepository } from "../../repositories";

export interface IAuthService {
  loginWithGoogle(): Promise<User>;
  registerWithEmailAndPassword(email: string, password: string): Promise<User>;
}

export class AuthService implements IAuthService {
  #authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.#authRepository = authRepository;
  }
  
  registerWithEmailAndPassword(email: string, password: string): Promise<User> {
    return this.#authRepository.registerWithEmailAndPassword(email, password);
  }

  async loginWithGoogle(): Promise<User> {
    return this.#authRepository.loginWithGoogle();
  }
}
