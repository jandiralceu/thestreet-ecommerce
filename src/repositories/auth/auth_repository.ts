import { signInWithGooglePopup } from "../../infra";

export interface IAuthRepository {
  signInWithGoogle(): Promise<void>;
}

export class AuthRepository implements IAuthRepository {
  async signInWithGoogle(): Promise<void> {
    try {
        const response = await signInWithGooglePopup();

        console.log(response);
    } catch (e) {
        console.log(e)
    }
  }
}
