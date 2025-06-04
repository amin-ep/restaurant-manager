import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updatePassword } from "../../services/accountApi";
import { updatePasswordPayload } from "../../types/AccountTypes";
import { AxiosDataErrorProps } from "../../types/AxiosTypes";
import AccountControl from "../accountControl/AccountControl";
import ErrorText from "../ui/ErrorText";
import Form from "../ui/Form";
import FormControl from "../ui/FormControl";
import Input from "../ui/Input";
import Label from "../ui/Label";
import LinkButton from "../ui/LinkButton";
import Loading from "../ui/Loading";
import styles from "./UpdatePasswordForm.module.css";

function UpdatePasswordForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm<{
    password: string;
    confirmPassword: string;
    currentPassword: string;
  }>({});

  const queryClient = useQueryClient();
  const { mutate, isLoading: isUpdatingPassword } = useMutation({
    mutationKey: ["account"],
    mutationFn: updatePassword,
    onSuccess(data) {
      if (data.status === 200) {
        queryClient.invalidateQueries(["account"]).then(() => {
          toast.success("Your password updated successfully");
          reset();
        });
      } else {
        const errResponse = data as AxiosError<AxiosDataErrorProps>;
        toast.error(
          errResponse.response?.data.message || "Something went wrong!"
        );
      }
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  const onSubmit = (data: updatePasswordPayload) => {
    mutate({
      password: data.password,
      currentPassword: data.currentPassword,
    });
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AccountControl>
        <Label htmlFor="current-password">Current Password</Label>
        <FormControl
          type="password"
          placeholder="Current Password"
          inputId="current-password"
          name="currentPassword"
          registerOptions={{
            required: {
              value: true,
              message: "Please give us your current password",
            },
            minLength: {
              value: 8,
              message: "Current Password must be at least 8 chars",
            },
            maxLength: {
              value: 12,
              message: "Current Password must be 12 chars or less",
            },
          }}
          register={register}
        />

        {errors.currentPassword && (
          <ErrorText>{errors.currentPassword.message}</ErrorText>
        )}
      </AccountControl>

      <AccountControl>
        <Label htmlFor="password">Password</Label>
        <FormControl
          type="password"
          placeholder="Password"
          inputId="password"
          register={register}
          registerOptions={{
            required: {
              value: true,
              message: "Please fill this input",
            },
            minLength: {
              value: 8,
              message: "password must be at least 8 chars",
            },
            maxLength: {
              value: 12,
              message: "password must be 12 chars or less",
            },
          }}
          name="password"
        />
        {errors.password && <ErrorText>*{errors.password.message}</ErrorText>}
      </AccountControl>

      <AccountControl>
        <Label htmlFor="confirm-password">Confirm Password</Label>

        <Input
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Please fill this input",
            },
            validate: (val) =>
              val === getValues().password || "Passwords are not same",
          })}
          className={styles.input}
        />

        {errors.confirmPassword && (
          <ErrorText>*{errors.confirmPassword.message}</ErrorText>
        )}
      </AccountControl>

      <div className={styles.actions}>
        <LinkButton className={styles.submit} type="submit">
          {isUpdatingPassword && <Loading />} Update
        </LinkButton>
      </div>
    </Form>
  );
}

export default UpdatePasswordForm;
