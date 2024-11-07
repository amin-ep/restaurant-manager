import { FieldValues } from "react-hook-form";

export interface IPizza {
  createdAt: Date;
  name: string;
  discount: number;
  imageUrl: string;
  ingredients: string[];
  inventory: number;
  unitPrice: number;
  finalPrice: number;
  updatedAt: Date;
  _id: string;
}

export type PizzasResponseData = {
  currentPage: number;
  data: {
    docs: IPizza[];
  };
  result: number;
  dataNum: number;
  status: string;
  totalPages: number;
};

export interface CreatePizzaPayload extends FieldValues {
  name: string;
  unitPrice: number;
  discount?: number;
  imageUrl: string;
  ingredients: string[];
  inventory: number;
}

export type OnePizzaResponseData = {
  status: string;
  data: {
    doc: IPizza;
  };
};
