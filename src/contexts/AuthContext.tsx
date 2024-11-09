import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthResponseData, LoginPayload } from "../types/AuthTypes";
import Cookies from "js-cookie";
import { JWT_TOKEN_KEY } from "../utils/constants";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/authApi";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import { AxiosDataErrorProps } from "../types/AxiosTypes";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isLoading: false,
  isLoggedIn: false,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  login: (_payload: LoginPayload) => {},
  logout: () => {},
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (payload: LoginPayload) => loginUser(payload),
    mutationKey: ["auth"],
    onSuccess(data: AxiosResponse<AuthResponseData>, vars) {
      toast.success(`Welcome ${vars.email}`);
      Cookies.set(JWT_TOKEN_KEY, data.data.token, {
        expires: 90,
      });
      setIsLoggedIn(true);
      navigate("/");
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  function logout() {
    Cookies.remove(JWT_TOKEN_KEY);
    navigate("/login");
  }

  useEffect(() => {
    const token = Cookies.get(JWT_TOKEN_KEY);
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("The context is used outside of the provider");
  }

  return context;
}

export { useAuth, AuthProvider };
