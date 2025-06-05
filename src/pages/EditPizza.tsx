import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPizza } from "../services/pizzaApi";
import { OnePizzaResponseData } from "../types/PizzaTypes";
import { AxiosResponse } from "axios";
import PizzaForm from "../components/pizzaForm/PizzaForm";
import Spinner from "../components/ui/Spinner";
import useDocumentTitle from "../hooks/useDocumentTitle";

function EditPizza() {
  const { pizzaId } = useParams();

  const {
    data,
    isLoading: isLoadingPizza,
    // isError,
  } = useQuery<AxiosResponse<OnePizzaResponseData>>({
    queryFn: () => getPizza(pizzaId!),
    queryKey: ["pizza"],
  });

  useDocumentTitle(`Edit "${data?.data.data.document.name}"`);

  if (isLoadingPizza) {
    return <Spinner />;
  }

  if (data)
    return (
      <>
        <PizzaForm initialData={data?.data.data.document} isOpen mode="edit" />
      </>
    );
}

export default EditPizza;
