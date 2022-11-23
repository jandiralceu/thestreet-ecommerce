import { ICredentials, IRegistration, User } from "../../models";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAccountWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "../../infra";

export interface IAuthRepository {
  logout(): Promise<void>;
  loginWithGoogle(): Promise<User>;
  login(credentials: ICredentials): Promise<User>;
  registerWithEmailAndPassword(userData: IRegistration): Promise<User>;
}

export class AuthRepository implements IAuthRepository {
  async registerWithEmailAndPassword({ email, password, displayName }: IRegistration): Promise<User> {
    try {
      const response = await createAccountWithEmailAndPassword(email, password);

      await updateProfile(response, { displayName });

      await createUserDocumentFromAuth({ ...response, displayName,});

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

  async login({ email, password }: ICredentials): Promise<User> {
    try {
      const response = await signInWithEmailAndPassword(email, password);

      return response;
    } catch (e) {
      throw e;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut();
    } catch (e) {
      throw e;
    }
  }
}
