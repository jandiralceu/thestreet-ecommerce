import { User } from "../../models";
import { signInWithGooglePopup } from "../../infra";

export interface IAuthRepository {
  signInWithGoogle(): Promise<User>;
}

export class AuthRepository implements IAuthRepository {
  async signInWithGoogle(): Promise<User> {
    try {
        return (await signInWithGooglePopup()).user;
    } catch (e) {
        console.log(e)
        throw(e);
    }
  }
}
