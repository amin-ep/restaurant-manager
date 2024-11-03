export interface IUser {
  fullName: string;
  email: string;
  phone: null | string;
  password: string;
  role: "admin" | "customer";
  address?:
    | {
        street: string;
        postalCode: string;
        text: string;
      }
    | undefined;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
