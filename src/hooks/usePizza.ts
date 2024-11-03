import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPizza, getAllPizzas, deletePizza } from "../services/pizzaApi";
import { AxiosResponse } from "axios";
import { PizzasResponseData } from "../types/PizzaTypes";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AxiosDataErrorProps } from "../types/AxiosTypes";

export function usePizza() {
  const queryClient = useQueryClient();
  const KEY = ["pizza"];

  // Get All Pizzas
  const { data: pizzaData, isLoading: isLoadingPizza } = useQuery<
    AxiosResponse<PizzasResponseData>
  >({
    queryFn: getAllPizzas,
    queryKey: KEY,
  });

  // Create pizza
  const { mutate: createPizzaMutation, isLoading: isCreating } = useMutation({
    mutationKey: KEY,
    mutationFn: createPizza,
    onSuccess() {
      toast.success("Your new pizza added successfully");
      queryClient.invalidateQueries({
        queryKey: KEY,
      });
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  const { mutate: deletePizzaMutation, isLoading: isDeleting } = useMutation({
    mutationKey: KEY,
    mutationFn: deletePizza,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: KEY,
      });
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  return {
    pizzaData,
    isLoadingPizza,
    createPizzaMutation,
    isCreating,
    deletePizzaMutation,
    isDeleting,
  };
}
