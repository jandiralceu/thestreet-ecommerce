import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { onAuthStateChangedListener } from "../../infra";
import { User } from "../../models";
import { AuthRepository } from "../../repositories";
import { AuthService, IAuthService } from "../../services";

type UserContextProps = {
  currentUser?: User | null;
  authService?: IAuthService;
  authenticated: boolean;
  logout: () => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextProps>({
  authenticated: false,
  currentUser: null,
  setCurrentUser: () => {},
  logout: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const authService = new AuthService(new AuthRepository());

  useEffect(() => {
    if (currentUser) setAuthenticated(true);
    else setAuthenticated(false);
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user?: User) => {
      setCurrentUser(user ?? null);
    })

    return unsubscribe;
  }, [])

  const logout = async () => {
    try {
      await authService!.logout()
      setCurrentUser(null);
    } catch(error: any) {
      console.log(`error ${error?.message}`);
    }
  }

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, authService, authenticated, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
