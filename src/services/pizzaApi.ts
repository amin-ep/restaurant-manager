import axios from "axios";
import { BASE_URL, JWT_TOKEN_KEY } from "../utils/helpers";
import Cookies from "js-cookie";

export async function getAllPizzas() {
  const token = Cookies.get(JWT_TOKEN_KEY);

  const response = await axios.get(`${BASE_URL}/pizza`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function createPizza(payload: FormData) {
  const token = Cookies.get(JWT_TOKEN_KEY);

  const response = await axios.post(`${BASE_URL}/pizza`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}

export async function deletePizza(id: string) {
  const token = Cookies.get(JWT_TOKEN_KEY);

  const response = await axios.delete(`${BASE_URL}/pizza/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}
