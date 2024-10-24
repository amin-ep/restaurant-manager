import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormCheckbox from "../../ui/FormCheckbox";
import { useState } from "react";
import FormHeading from "../../ui/FormHeading";
import FormRow from "../../ui/FormRow";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthRequest from "@/services/authApi";
import { SignupPayload } from "@/types/AuthTypes";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { ICustomer } from "@/interfaces/ICustomer";
import { AxiosResponse, AxiosError } from "axios";

interface ResponseData {
  customer: ICustomer;
  status: "success" | "error" | "fail";
  token: string;
}

function SignupForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { login: signupUser } = useAuth();
  const navigate = useNavigate();

  const { signup } = new AuthRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupPayload>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: SignupPayload) => signup(data),
    onSuccess: (data: AxiosResponse<ResponseData>) => {
      toast.success(`Welcome To Pizza Passion ${data.data.customer.firstName}`);
      navigate("/");
      signupUser(data.data.token);
    },
    onError: (err: AxiosError<{ message: string; status: string }>) => {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  const onSubmit = (data: SignupPayload) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeading>Signup</FormHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormRow
          errorMessage={errors?.firstName?.message}
          id="first-name"
          label="First Name"
        >
          <input
            type="text"
            {...register("firstName", {
              required: {
                value: true,
                message: "Please tell us your first name",
              },
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "First name must be 20 characters or less",
              },
            })}
            id="first-name"
            className="input"
          />
        </FormRow>
        <FormRow
          errorMessage={errors?.lastName?.message}
          id="last-name"
          label="Last Name"
        >
          <input
            type="text"
            {...register("lastName", {
              required: {
                value: true,
                message: "Please tell us your last name",
              },
              minLength: {
                value: 5,
                message: "Last name must be at least 5 characters",
              },
              maxLength: {
                value: 25,
                message: "Last name must be 25 characters or less",
              },
            })}
            id="last-name"
            className="input"
          />
        </FormRow>
      </div>
      <FormRow
        errorMessage={errors?.phone?.message}
        id="signup-phone"
        label="Phone Number"
      >
        <input
          type="tel"
          {...register("phone", {
            required: {
              value: true,
              message: "Please Input your phone number",
            },
            validate: (val) =>
              val.length === 11 || "Phone number must be 11 characters",
          })}
          id="signup-phone"
          className="input"
        />
      </FormRow>
      <FormRow
        errorMessage={errors?.password?.message}
        id="signup-password"
        label="Password"
      >
        <input
          type={showPassword ? "text" : "password"}
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
          id="signup-password"
          className="input"
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
          Signup
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
