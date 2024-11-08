import Cookies from "js-cookie";
import { BASE_URL, JWT_TOKEN_KEY } from "../utils/constants";
import axios from "axios";

export async function getOrders(queryString: string = "") {
  const token = Cookies.get(JWT_TOKEN_KEY);

  let query: string = "";

  if (queryString === "all") {
    query = "";
  } else {
    query = `status=${queryString}`;
  }

  const response = await axios.get(`${BASE_URL}/order?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}
