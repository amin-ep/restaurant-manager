import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/orderApi";
import { AxiosResponse } from "axios";
import { OrdersResponseData } from "../types/OrderTypes";
import { useFilter } from "./useFilter";

export function useOrder() {
  const queryString = useFilter("status");
  const { data: orders, isLoading: isLoadingOrders } = useQuery<
    AxiosResponse<OrdersResponseData>
  >({
    queryKey: ["order", queryString],
    queryFn: () => getOrders(queryString),
  });

  return { orders, isLoadingOrders };
}
