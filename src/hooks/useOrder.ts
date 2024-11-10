import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getOrders } from "../services/orderApi";
import { AxiosResponse, AxiosError } from "axios";
import { OrdersResponseData } from "../types/OrderTypes";
import { useFilter } from "./useFilter";
import { updateOrderById } from "../services/orderApi";
import { toast } from "react-toastify";
import { AxiosDataErrorProps } from "../types/AxiosTypes";

export function useOrder() {
  const queryString = useFilter("status");
  const queryClient = useQueryClient();
  // Get All orders
  const { data: orders, isLoading: isLoadingOrders } = useQuery<
    AxiosResponse<OrdersResponseData>
  >({
    queryKey: ["order", queryString],
    queryFn: () => getOrders(queryString),
  });

  // Update Order By Id
  const { isLoading: isUpdatingOrder, mutate: updateOrderMutation } =
    useMutation({
      mutationKey: ["order"],
      mutationFn: updateOrderById,
      onSuccess() {
        queryClient.invalidateQueries(["order"]);
        toast.success("Order updated successfully");
      },
      onError(err: AxiosError<AxiosDataErrorProps>) {
        toast.error(err.response?.data.message || "Something went wrong!");
      },
    });
  return { orders, isLoadingOrders, updateOrderMutation, isUpdatingOrder };
}
