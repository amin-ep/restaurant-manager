import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getAccountData } from "../services/accountApi";
import { AccountResponse } from "../types/AccountTypes";

export function useAccount() {
  const { data: accountData, isLoading: isLoadingAccount } = useQuery<
    AxiosResponse<AccountResponse>
  >({
    queryFn: getAccountData,
    queryKey: ["account"],
  });

  return {
    isLoadingAccount,
    accountData,
  };
}
