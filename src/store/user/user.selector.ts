import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.user;

export const selectAuthenticated = (state: RootState) => !!state.user?.currentUser;
