import { IAuthRepository } from "../../repositories";

export interface IAuthService {
  signInWithGoogle(): Promise<void>;
}

export class AuthService implements IAuthService {
  #authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.#authRepository = authRepository;
  }

  async signInWithGoogle(): Promise<void> {
    return this.#authRepository.signInWithGoogle();
  }
}
