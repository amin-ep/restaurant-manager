import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateAccount } from "../../services/accountApi";
import { UpdateAccountPayload } from "../../types/AccountTypes";
import AccountControl from "../accountControl/AccountControl";
import ErrorText from "../ui/ErrorText";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Label from "../ui/Label";
import LinkButton from "../ui/LinkButton";
import Loading from "../ui/Loading";
import Spinner from "../ui/Spinner";
import styles from "./UpdateAccountForm.module.css";
import { AxiosError } from "axios";
import { AxiosDataErrorProps } from "../../types/AxiosTypes";
import { useAccount } from "../../hooks/useAccount";

function UpdateAccountForm() {
  const { accountData, isLoadingAccount } = useAccount();

  const queryClient = useQueryClient();

  const { mutate: updateAccountMutation, isLoading: isUpdatingAccount } =
    useMutation({
      mutationKey: ["account"],
      mutationFn: updateAccount,
      onSuccess(data) {
        if (data.status === 200) {
          queryClient.invalidateQueries(["account"]).then(() => {
            toast.success("Account updated successfully");
          });
        } else {
          const errorResponse = data as AxiosError<AxiosDataErrorProps>;
          toast.error(
            errorResponse.response?.data.message || "Something went wrong!"
          );
        }
      },
      onError(err: AxiosError<AxiosDataErrorProps>) {
        toast.error(err.response?.data.message || "Something went wrong!");
      },
    });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UpdateAccountPayload>();

  useEffect(() => {
    if (accountData) {
      const data = accountData.data.data.document;
      reset({
        firstName: data?.firstName,
        lastName: data?.lastName,
      });
    }
  }, [accountData, reset]);

  const onSubmit = (data: UpdateAccountPayload) => {
    if (data.firstName === accountData?.data?.data?.document?.firstName) {
      data.firstName = undefined;
    }
    if (data.lastName === accountData?.data?.data?.document?.lastName) {
      data.lastName = undefined;
    }
    console.log(data);
    if (!data.lastName && !data.firstName) {
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
          <AccountControl>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              className={styles.input}
              placeholder="First Name"
              id="firstName"
              {...register("firstName", {
                required: false,
                minLength: {
                  value: 5,
                  message: "First Name must be at least 5 chars",
                },
                maxLength: {
                  value: 40,
                  message: "First Name must be 40 chars or less",
                },
              })}
            />
            {errors.firstName && (
              <ErrorText>{errors.firstName.message}</ErrorText>
            )}
          </AccountControl>
          <AccountControl>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              className={styles.input}
              placeholder="Last Name"
              id="lastName"
              {...register("lastName", {
                required: false,
                minLength: {
                  value: 5,
                  message: "Last Name must be at least 5 chars",
                },
                maxLength: {
                  value: 40,
                  message: "Last Name must be 40 chars or less",
                },
              })}
            />
            {errors.lastName && (
              <ErrorText>{errors.lastName.message}</ErrorText>
            )}
          </AccountControl>
          <div className={styles.actions}>
            <LinkButton
              className={styles.submit}
              disabled={isUpdatingAccount}
              type="submit"
            >
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
