import { User } from "../../models";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../infra";

export interface IAuthRepository {
  signInWithGoogle(): Promise<User>;
}

export class AuthRepository implements IAuthRepository {
  async signInWithGoogle(): Promise<User> {
    try {
      const result = await signInWithGooglePopup();
      await createUserDocumentFromAuth(result.user);

      return result.user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
