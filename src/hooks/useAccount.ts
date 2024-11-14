import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAccountData,
  updateAccount,
  updatePassword,
} from "../services/accountApi";
import { AxiosResponse } from "axios";
import { AccountResponse } from "../types/AccountTypes";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AxiosDataErrorProps } from "../types/AxiosTypes";
import { UpdateAccountPayload } from "../types/AccountTypes";

export function useAccount() {
  const queryClient = useQueryClient();
  const { data: accountData, isLoading: isLoadingAccount } = useQuery<
    AxiosResponse<AccountResponse>
  >({
    queryFn: getAccountData,
    queryKey: ["account"],
  });

  const { mutate: updateAccountMutation, isLoading: isUpdatingAccount } =
    useMutation({
      mutationKey: ["account"],
      mutationFn: updateAccount,
      onSuccess(_, vars: UpdateAccountPayload) {
        if (vars.email && vars.fullName) {
          toast.success("Your account updated successfully");
        } else if (vars.email || vars.fullName) {
          toast.success(
            `Your ${
              vars.email ? "Email" : vars.fullName ? "Full Name" : ""
            } updated successfully`
          );
        }

        queryClient.invalidateQueries(["account"]);
      },
      onError(err: AxiosError<AxiosDataErrorProps>) {
        toast.error(err.response?.data.message || "Something went wrong!");
      },
    });

  const { mutate: updatePasswordMutation, isLoading: isUpdatingPassword } =
    useMutation({
      mutationKey: ["account"],
      mutationFn: updatePassword,
      onSuccess() {
        toast.success("Your password updated successfully");
        queryClient.invalidateQueries(["account"]);
      },
      onError(err: AxiosError<AxiosDataErrorProps>) {
        toast.error(err.response?.data.message || "Something went wrong!");
      },
    });

  return {
    isLoadingAccount,
    accountData,
    updateAccountMutation,
    isUpdatingAccount,
    updatePasswordMutation,
    isUpdatingPassword,
  };
}
