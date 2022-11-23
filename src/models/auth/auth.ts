import { User as FirebaseUser } from "firebase/auth";

export type User = FirebaseUser;

export type ICredentials = {
  email: string;
  password: string;
};

export type IRegistration = {
  email: string;
  password: string;
  displayName: string;
};

