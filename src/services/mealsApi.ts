import axios, { AxiosError } from "axios";
import { BASE_URL } from "../utils/helpers";

export const getAllMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/menu`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err: AxiosError) {
    return err.message || "Something went wrong while getting menu";
  }
};
