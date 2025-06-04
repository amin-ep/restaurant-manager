import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import {
  IUpdateAccountResponse,
  UpdateAccountPayload,
  updatePasswordPayload,
} from "../types/AccountTypes";
import { BASE_URL, JWT_TOKEN_KEY } from "../utils/constants";
import { AxiosDataErrorProps } from "../types/AxiosTypes";
import { IUser } from "../types/UserTypes";

export async function getAccountData() {
  const token = Cookies.get(JWT_TOKEN_KEY);

  const response = await axios.get(`${BASE_URL}/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function updateAccount(payload: UpdateAccountPayload) {
  const token = Cookies.get(JWT_TOKEN_KEY);
  try {
    const response: AxiosResponse<IUpdateAccountResponse> = await axios.patch(
      `${BASE_URL}/user/updateMe`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    const error = err as AxiosError<AxiosDataErrorProps>;
    return error;
  }
}

export async function updatePassword(payload: updatePasswordPayload) {
  const token = Cookies.get(JWT_TOKEN_KEY);
  try {
    const response: AxiosResponse<{
      status: string;
      data: {
        user: IUser;
      };
    }> = await axios.patch(`${BASE_URL}/user/updatePassword`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    const error = err as AxiosError<AxiosDataErrorProps>;
    return error;
  }
}
