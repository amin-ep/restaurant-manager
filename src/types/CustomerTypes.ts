export interface ICustomer {
  createdAt: Date;
  email: string;
  fullName: string;
  password: string;
  phone: null | string;
  role: "customer";
  updatedAt: Date;
  __v: number;
  _id: string;
}
