import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPizza, getAllPizzas, deletePizza } from "../services/pizzaApi";
import { AxiosResponse } from "axios";
import { PizzasResponseData } from "../types/PizzaTypes";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AxiosDataErrorProps } from "../types/AxiosTypes";
import { useSearchParams } from "react-router-dom";
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
    queryKey: ["pizza", queryString, page],
  });

  const { mutate: createPizzaMutation, isLoading: isCreating } = useMutation({
    mutationKey: ["pizza"],
    mutationFn: createPizza,
    onSuccess() {
      toast.success("Your new pizza added successfully");
      queryClient.invalidateQueries({
        queryKey: ["pizza"],
      });
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
      console.log(err);
    },
  });

  // Delete Pizza
  const { mutate: deletePizzaMutation, isLoading: isDeleting } = useMutation({
    mutationKey: ["pizza"],
    mutationFn: deletePizza,
    onSuccess() {
      toast.success("Item deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["pizza"],
      });
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  return {
    pizzaData,
    isLoadingPizzas,
    createPizzaMutation,
    isCreating,
    deletePizzaMutation,
    isDeleting,
  };
}
