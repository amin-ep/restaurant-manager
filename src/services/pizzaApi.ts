import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL, JWT_TOKEN_KEY } from "../utils/constants";
import Cookies from "js-cookie";
import { IPizza, UpdatePizzaPayload } from "../types/PizzaTypes";
import { AxiosDataErrorProps, ICreateDataResponse } from "../types/AxiosTypes";

export async function getAllPizzas({
  queryStr,
  page,
}: {
  queryStr: string;
  page: string | number;
}) {
  const token = Cookies.get(JWT_TOKEN_KEY);

  let queryString: string;

  if (queryStr === "with-discount") {
    queryString = "discount_gt=0";
  } else if (queryStr === "no-discount") {
    queryString = "discount=0";
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
  try {
    const token = Cookies.get(JWT_TOKEN_KEY);
    console.log(Object.fromEntries(payload));

    const response: AxiosResponse<ICreateDataResponse<IPizza>> =
      await axios.post(`${BASE_URL}/pizza`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

    return response;
  } catch (err) {
    const error = err as AxiosError<AxiosDataErrorProps>;
    return error;
  }
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
