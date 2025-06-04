import { FieldValues } from "react-hook-form";
import { IUser } from "./UserTypes";

export interface LoginPayload extends FieldValues {
  email: string;
  password: string;
}

export type AuthResponseData = {
  token: string;
  status: string;
  data: {
    user: IUser;
  };
};
