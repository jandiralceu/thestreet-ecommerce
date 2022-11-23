import { ICredentials, IRegistration, User } from "../../models";
import { IAuthRepository } from "../../repositories";

export interface IAuthService {
  logout(): Promise<void>;
  loginWithGoogle(): Promise<User>;
  login(credentials: ICredentials): Promise<User>;
  registerWithEmailAndPassword(userData: IRegistration): Promise<User>;
}

export class AuthService implements IAuthService {
  #authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.#authRepository = authRepository;
  }

  registerWithEmailAndPassword(userData: IRegistration): Promise<User> {
    return this.#authRepository.registerWithEmailAndPassword(userData);
  }

  async loginWithGoogle(): Promise<User> {
    return this.#authRepository.loginWithGoogle();
  }

  async login(credentials: ICredentials): Promise<User> {
    return this.#authRepository.login(credentials);
  }

  async logout(): Promise<void> {
    return this.#authRepository.logout();
  }
}
