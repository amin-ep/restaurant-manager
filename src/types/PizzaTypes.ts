import { FieldValues } from "react-hook-form";

export interface IPizza {
  createdAt: Date;
  name: string;
  discount: number;
  imageUrl: string;
  ingredients: string[];
  unitPrice: number;
  finalPrice: number;
  updatedAt: Date;
  _id: string;
  ratings: { user: string; rate: number }[] | undefined;
  ratingsAverage: number | undefined;
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

export interface PizzaPayload extends FieldValues {
  name: string;
  unitPrice: number;
  discount?: number;
  imageUrl: string;
  ingredients: string[];
}

export interface UpdatePizzaPayload extends FieldValues {
  name?: string;
  unitPrice?: number;
  discount?: number;
  imageUrl?: string | undefined | Blob | MediaSource;
  ingredients?: string[];
}

export type OnePizzaResponseData = {
  status: string;
  data: {
    document: IPizza;
  };
};
