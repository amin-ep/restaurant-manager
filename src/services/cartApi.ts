import { ICart } from "@/interfaces/ICart";
import { BASE_URL } from "@/utils/helpers";
import axios from "axios";
import Cookies from "js-cookie";

export interface ResponseData {
  cart: ICart;
  status: "success" | "error" | "fail";
}

export default class CartApi {
  async getMyCart() {
    const token = Cookies.get("token");
    const response = await axios.get(`${BASE_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response;
  }
}
