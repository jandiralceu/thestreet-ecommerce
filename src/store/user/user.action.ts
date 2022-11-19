import { User } from "../../models";
import { createAction } from "../../utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user?: User) => {
  return createAction<USER_ACTION_TYPES>(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
