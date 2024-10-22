export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ISate {
  isLoggedIn: boolean;
  userData: IUser | null;
}

export type ActionTypes =
  | {
      type: "login";
    }
  | { type: "userData"; payload: IUser }
  | { type: "logout" };

export type SignupPayload = {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
};

// export type LoginPayload = { phone: string; password: string };
export interface LoginPayload {
  phone: string;
  password: string;
}
