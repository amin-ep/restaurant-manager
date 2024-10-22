import axios from "axios";
import { BASE_URL } from "../utils/helpers";
import { LoginPayload, SignupPayload } from "../types/AuthTypes";
import { ICustomer } from "@/interfaces/ICustomer";

export interface ResponseData {
  customer: ICustomer;
  status: "success" | "error" | "fail";
}

export default class AuthRequest {
  async signup(payload: SignupPayload) {
    const response = await axios.post(`${BASE_URL}/auth/signup`, payload);
    return response;
  }

  async login(payload: LoginPayload) {
    const response = await axios.post(`${BASE_URL}/auth/login`, payload);

    return response;
  }
}
