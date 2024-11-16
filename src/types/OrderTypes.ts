import { ICustomer } from "./CustomerTypes";
import { IPizza } from "./PizzaTypes";

export type Address = { postalCode: string; street: string; text: string };

export interface OrderCartItem {
  pizza: IPizza;
  quantity: number;
  _id: string;
}

export interface IOrder {
  address: {
    street: string;
    postalCode: string;
    text: string;
  };
  canceled: boolean;
  cart: {
    cartItems: OrderCartItem[];
    totalPrice: number;
    _id: string;
  };
  createdAt: string;
  customer: ICustomer;
  deliveryTime: string | null | Date;
  phone: string;
  status: "waiting" | "accepted" | "posted" | "received";
  text: string;
  updatedAt: string;
  _id: string;
}

export type OrdersResponseData = {
  currentPage: number;
  data: {
    docs: IOrder[];
  };
  result: number;
  dataNum: number;
  status: string;
  totalPages: number;
};

export type OrderResponseData = {
  status: string;
  data: {
    doc: IOrder;
  };
};

export interface UpdateOrderPayloadOptions {
  status: string;
  deliveryTime?: Date | string;
}

export type UpdateOrderResponseData = {
  status: string;
  data: {
    doc: IOrder;
  };
};
