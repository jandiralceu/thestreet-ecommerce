import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.auth;

export const selectAuthenticated = (state: RootState) => !!state.auth?.currentUser;
