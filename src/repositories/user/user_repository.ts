import { User } from "../../models";
import { getCurrentUser } from "../../infra";

export interface IUserRepository {
  getCurrentUser(): Promise<User>;
}

export class UserRepository implements IUserRepository {
  async getCurrentUser(): Promise<User> {
    try {
      const response = await getCurrentUser();
      return response as User;
    } catch (e) {
      throw e;
    }
  }
}
