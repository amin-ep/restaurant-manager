export interface ICustomer {
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: null | string;
  role: "customer";
  updatedAt: string;
  __v: number;
  _id: string;
}

export type OrderCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};
