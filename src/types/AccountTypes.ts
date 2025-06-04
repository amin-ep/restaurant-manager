import { FieldValues } from "react-hook-form";
import { IUser } from "./UserTypes";

export type AccountResponse = {
  status: string;
  data: {
    document: IUser;
  };
};

export interface UpdateAccountPayload extends FieldValues {
  firstName?: string;
  lastName?: string;
}

export type updatePasswordPayload = {
  currentPassword: string;
  password: string;
};

export type GetMeResponse = {
  status: string;
  data: {
    document: IUser;
  };
};

export interface IUpdateAccountResponse {
  status: string;
  data: {
    user: IUser;
  };
}
