import { IMeal } from "./IMeals";

interface Item {
  item: IMeal;
  quantity: number;
  _id: string;
}

export interface ICart {
  cartItems: Item[];
  createdAt: Date;
  customer: string;
  updatedAt: Date;
  __v: number;
  _id: string;
}

export interface CartResponseData {
  cart: ICart;
  status: "success" | "fail" | "error";
}
