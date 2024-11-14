import Cookies from "js-cookie";
import { BASE_URL, JWT_TOKEN_KEY } from "../utils/constants";
import axios from "axios";
import {
  UpdateAccountPayload,
  updatePasswordPayload,
} from "../types/AccountTypes";

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
  const response = await axios.patch(`${BASE_URL}/user/updateMe`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function updatePassword(payload: updatePasswordPayload) {
  const token = Cookies.get(JWT_TOKEN_KEY);

  const response = await axios.patch(
    `${BASE_URL}/user/updateMyPassword`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}
