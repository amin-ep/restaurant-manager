import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormCheckbox from "../../ui/FormCheckbox";
import FormHeading from "../../ui/FormHeading";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import AuthRequest from "@/services/authApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { LoginPayload } from "@/types/AuthTypes";
import { AxiosError, AxiosResponse } from "axios";
import { ICustomer } from "@/interfaces/ICustomer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ResponseData {
  customer: ICustomer;
  status: "success" | "error" | "fail";
  token: string;
}

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login: loginUser } = useAuth();
  const navigate = useNavigate();

  const { login } = new AuthRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginPayload) => login(data),
    onSuccess: (data: AxiosResponse<ResponseData>) => {
      toast.success(`Welcome back ${data.data.customer.firstName}`);
      navigate("/");
      loginUser(data.data.token);
    },
    onError: (err: AxiosError<{ message: string; status: string }>) => {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  const onSubmit = (data: LoginPayload) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeading>Login</FormHeading>
      <FormRow
        errorMessage={errors?.phone?.message}
        id="login-phone"
        label="Phone Number"
      >
        <input
          type="tel"
          id="login-phone"
          className="input"
          {...register("phone", {
            required: {
              value: true,
              message: "Please Input your phone number",
            },
            validate: (val) =>
              val.length === 11 || "Phone number must be 11 characters",
          })}
        />
      </FormRow>
      <FormRow
        errorMessage={errors?.password?.message}
        id="login-password"
        label="Password"
      >
        <input
          type={showPassword ? "text" : "password"}
          id="login-password"
          className="input"
          {...register("password", {
            required: {
              value: true,
              message: "Please Input a valid password",
            },
            minLength: {
              value: 6,
              message: "Password should be at least 6 characters",
            },
            maxLength: {
              value: 14,
              message: "Password should be 14 characters or less",
            },
          })}
        />
        <FormCheckbox onChange={() => setShowPassword((show) => !show)} />
      </FormRow>
      <FormRow>
        <Button
          disabled={isPending}
          type="submit"
          variation="secondary"
          extraClasses="w-full"
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
