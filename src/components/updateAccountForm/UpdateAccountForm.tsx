import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useAccount } from "../../hooks/useAccount";
import { UpdateAccountPayload } from "../../types/AccountTypes";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import LinkButton from "../../ui/LinkButton";
import Loading from "../../ui/Loading";
import Spinner from "../../ui/Spinner";
import styles from "./UpdateAccountForm.module.css";

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
  const {
    updateAccountMutation,
    isUpdatingAccount,
    accountData,
    isLoadingAccount,
  } = useAccount();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UpdateAccountPayload>();

  useEffect(() => {
    if (accountData) {
      reset({
        email: accountData?.data.data.user.email,
        fullName: accountData?.data.data.user.fullName,
      });
    }
  }, [accountData, reset]);

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
    <>
      {isLoadingAccount ? (
        <Spinner />
      ) : (
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
            <LinkButton type="submit">
              {isUpdatingAccount && <Loading />}
              Update
            </LinkButton>
          </div>
        </Form>
      )}
    </>
  );
}

export default UpdateAccountForm;
