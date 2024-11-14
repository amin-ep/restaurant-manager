import { FieldValues } from "react-hook-form";

export type IUser = {
  createdAt: string;
  email: string;
  fullName: string;
  password: string;
  phone: null | string;
  role: "admin";
  updatedAt: string;
  __v: number;
  _id: string;
};

export type AccountResponse = {
  status: string;
  data: {
    user: IUser;
  };
};

export interface UpdateAccountPayload extends FieldValues {
  email?: string | undefined;
  fullName?: string;
}

export type updatePasswordPayload = {
  currentPassword: string;
  password: string;
};
