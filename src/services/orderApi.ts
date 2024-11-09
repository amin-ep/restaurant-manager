import Cookies from "js-cookie";
import { BASE_URL, JWT_TOKEN_KEY } from "../utils/constants";
import axios from "axios";

export async function getOrders(queryString: string) {
  const token = Cookies.get(JWT_TOKEN_KEY);

  let query: string;

  if (
    queryString === "accepted" ||
    queryString === "posted" ||
    queryString === "received" ||
    queryString === "waiting"
  ) {
    query = `status=${queryString}`;
  } else {
    query = "";
  }
  const response = await axios.get(`${BASE_URL}/order?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function getOrderById(id: string) {
  const token = Cookies.get(JWT_TOKEN_KEY);
  const response = await axios.get(`${BASE_URL}/order/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}
