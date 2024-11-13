import axios from "axios";
import { BASE_URL, JWT_TOKEN_KEY } from "../utils/constants";
import Cookies from "js-cookie";
import { UpdatePizzaPayload } from "../types/PizzaTypes";

export async function getAllPizzas({
  queryStr,
  page,
}: {
  queryStr: string;
  page: string;
}) {
  const token = Cookies.get(JWT_TOKEN_KEY);

  let queryString: string;

  if (queryStr === "with-discount") {
    queryString = "discount[gt]=0";
  } else if (queryStr === "no-discount") {
    queryString = "discount[eq]=0";
  } else {
    queryString = "";
  }

  const response = await axios.get(
    `${BASE_URL}/pizza?${queryString}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

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

export async function getPizza(id: string) {
  const response = await axios.get(`${BASE_URL}/pizza/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function updatePizzaById({
  id,
  payload,
}: {
  id: string;
  payload: UpdatePizzaPayload;
}) {
  const token = Cookies.get(JWT_TOKEN_KEY);

  const response = await axios.patch(`${BASE_URL}/pizza/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);

  return response;
}
