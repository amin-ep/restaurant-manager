import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import LinkButton from "../../ui/LinkButton";
import Input from "../../ui/Input";
import styled from "styled-components";
import styles from "./UpdatePasswordForm.module.css";
import { useAccount } from "../../hooks/useAccount";
import { updatePasswordPayload } from "../../types/AccountTypes";
import Loading from "../../ui/Loading";

const Control = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 0;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid var(--color-gray-2);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Label = styled.label`
  color: var(--color-gray-8);
`;

const Error = styled.p`
  color: #eb2020;
`;

function UpdatePasswordForm() {
  const { updatePasswordMutation, isUpdatingPassword } = useAccount();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<{
    password: string;
    confirmPassword: string;
    currentPassword: string;
  }>({});

  const onSubmit = (data: updatePasswordPayload) => {
    updatePasswordMutation({
      password: data.password,
      currentPassword: data.currentPassword,
    });
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Control>
        <Label htmlFor="current-password">Current Password</Label>
        <Input
          placeholder="Current Password"
          id="current-password"
          {...register("currentPassword", {
            required: {
              value: true,
              message: "Please fill this input",
            },
            minLength: {
              value: 8,
              message: "Current Password must be at least 8 chars",
            },
            maxLength: {
              value: 12,
              message: "Current Password must be 12 chars or less",
            },
          })}
          className={styles.input}
        />
        {errors.currentPassword && (
          <Error>*{errors.currentPassword.message}</Error>
        )}
      </Control>
      <Control>
        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="Password"
          id="password"
          {...register("password", {
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
          })}
          className={styles.input}
        />
        {errors.password && <Error>*{errors.password.message}</Error>}
      </Control>

      <Control>
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
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
          <Error>*{errors.confirmPassword.message}</Error>
        )}
      </Control>
      <div className={styles.submit}>
        <LinkButton type="submit">
          {isUpdatingPassword && <Loading />} Update
        </LinkButton>
      </div>
    </Form>
  );
}

export default UpdatePasswordForm;
