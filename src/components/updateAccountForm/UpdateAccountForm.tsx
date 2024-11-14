import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import LinkButton from "../../ui/LinkButton";
import Input from "../../ui/Input";
import styled from "styled-components";
import styles from "./UpdateAccountForm.module.css";
import { UpdateAccountPayload } from "../../types/AccountTypes";
import { useAccount } from "../../hooks/useAccount";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
  width: 7rem;
`;

const Error = styled.p`
  color: #eb2020;
`;

function UpdateAccountForm() {
  const { accountData, updateAccountMutation } = useAccount();
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["account"]);
  }, [queryClient]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateAccountPayload>({
    defaultValues: {
      email: accountData?.data?.data?.user?.email,
      fullName: accountData?.data?.data?.user?.fullName,
    },
  });

  const onSubmit = (data: UpdateAccountPayload) => {
    if (data.email === accountData?.data?.data?.user?.email) {
      data.email = undefined;
    }
    if (data.fullName === accountData?.data?.data?.user?.fullName) {
      data.fullName = undefined;
    }

    if (!data.email && !data.fullName) {
      toast.error("Please change some values");
    } else {
      updateAccountMutation(data);
    }
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Control>
        <Label htmlFor="email">E-Mail</Label>
        <Input
          placeholder="E-Mail"
          id="email"
          {...register("email", {
            required: false,
            validate: (val) => val?.includes("@") || "Invalid email",
          })}
          className={styles.input}
        />
        {errors.email && <Error>*{errors.email.message}</Error>}
      </Control>
      <Control>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          className={styles.input}
          placeholder="Full Name"
          id="fullName"
          {...register("fullName", {
            required: false,
            minLength: {
              value: 5,
              message: "Full Name must be at least 5 chars",
            },
            maxLength: {
              value: 40,
              message: "Full Name must be 40 chars or less",
            },
          })}
        />
        {errors.fullName && <Error>*{errors.fullName.message}</Error>}
      </Control>
      <div className={styles.actions}>
        <LinkButton type="submit">Update</LinkButton>
      </div>
    </Form>
  );
}

export default UpdateAccountForm;
