import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useSearchParams } from "react-router-dom";
import { getAllPizzas } from "../services/pizzaApi";
import { PizzasResponseData } from "../types/PizzaTypes";
import { useFilter } from "./useFilter";

export function usePizza() {
  const [searchParams] = useSearchParams();
  const queryString = useFilter("discount");

  const queryClient = useQueryClient();
  const page = searchParams.get("page") || "1";

  const { data: pizzaData, isLoading: isLoadingPizzas } = useQuery<
    AxiosResponse<PizzasResponseData>
  >({
    queryFn: () => getAllPizzas({ queryStr: queryString, page: page! }),
    queryKey: ["pizzas", queryString, page],
  });

  queryClient.prefetchQuery({
    queryFn: () => getAllPizzas({ queryStr: queryString, page: page! + 1 }),
    queryKey: ["pizzas", queryString, page + 1],
  });

  queryClient.prefetchQuery({
    queryFn: () =>
      getAllPizzas({ queryStr: queryString, page: Number(page)! - 1 }),
    queryKey: ["pizzas", queryString, Number(page) - 1],
  });

  return {
    pizzaData,
    isLoadingPizzas,
  };
}
