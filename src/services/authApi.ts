import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { LoginPayload } from "../types/AuthTypes";

export async function loginUser(payload: LoginPayload) {
  const response = await axios.post(`${BASE_URL}/auth/login`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
