import { User } from "../../models";
import { signInWithGooglePopup, createUserDocumentFromAuth, createAccountWithEmailAndPassword } from "../../infra";

export interface IAuthRepository {
  loginWithGoogle(): Promise<User>;
  registerWithEmailAndPassword(email: string, password: string): Promise<User>;
}

export class AuthRepository implements IAuthRepository {
  async registerWithEmailAndPassword(email: string, password: string): Promise<User> {
    try {
      const response = await createAccountWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(response);

      return response;
    } catch (error) {
      throw error;
    }
  }
  async loginWithGoogle(): Promise<User> {
    try {
      const response = await signInWithGooglePopup();
      await createUserDocumentFromAuth(response.user);

      return response.user;
    } catch (e) {
      throw e;
    }
  }
}
