import { useCallback, useReducer } from "react";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";

import { User } from "../../models";
import { AuthService } from "../../services";
import { AuthRepository } from "../../repositories";
import { onAuthStateChangedListener } from "../../infra";
import {
  IAction,
  IState,
  UserActionTypes,
  UserContextProps,
} from "./user.context.props";

const UserContext = createContext<UserContextProps>({
  authenticated: false,
  currentUser: null,
  setCurrentUser: (user: User) => {},
  logout: () => {},
});

const userReducer = (state: IState, action: IAction<User>): IState => {
  switch (action.type) {
    case UserActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
        authenticated: !!action.payload,
      };
    default:
      return state;
  }
};

const INITIAL_STATE: IState = { currentUser: null, authenticated: false };

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const authService = new AuthService(new AuthRepository());
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = useCallback(
    (user: User | null) =>
      dispatch({ type: UserActionTypes.setCurrentUser, payload: user }),
    []
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user?: User) => {
      setCurrentUser(user ?? null);
    });

    return unsubscribe;
  }, [setCurrentUser]);

  const logout = async () => {
    try {
      await authService!.logout();
      setCurrentUser(null);
    } catch (error: any) {
      console.log(`error ${error?.message}`);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        setCurrentUser,
        authService,
        authenticated: state.authenticated,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
