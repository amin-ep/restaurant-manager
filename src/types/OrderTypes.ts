import { FieldValues } from "react-hook-form";
import { OrderCustomer } from "./CustomerTypes";
import { IPizza } from "./PizzaTypes";

export type Address = { postalCode: string; street: string; text: string };

export interface OrderCartItem {
  pizza: IPizza;
  quantity: number;
  _id: string;
}

export enum OrderStatus {
  WAITING = "waiting",
  ACCEPTED = "accepted",
  POSTED = "posted",
  RECEIVED = "received",
  CANCELLED = "cancelled",
  REJECTED = "rejected",
}

export interface IOrder {
  _id: string;
  address: Address;
  statusHistory: {
    status: OrderStatus;
    changedAt: Date;
  };
  cart: {
    cartItems: OrderCartItem[];
    totalQuantity: number;
    totalPrice: number;
  };
  customer: OrderCustomer;
  phone: string;
  status: OrderStatus;
  createdAt: Date;
  description?: string;
  deliveryTime?: Date;
  adminNotes?: {
    text: string;
    lastUpdate: Date;
  };
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
    document: IOrder;
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

export interface IAdminNotesPayload extends FieldValues {
  text: string;
}
