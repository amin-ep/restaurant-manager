import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { OnePizzaResponseData } from "../types/PizzaTypes";
import { getPizza } from "../services/pizzaApi";
import styles from "./Pizza.module.css";
import { FILE_URL } from "../utils/helpers";
import LinkButton from "../ui/LinkButton";

function Pizza() {
  const { id } = useParams();
  const { data, isLoading: isLoadingPizza } = useQuery<
    AxiosResponse<OnePizzaResponseData>
  >({
    queryFn: () => getPizza(id!),
    queryKey: ["pizza"],
  });

  const pizza = data?.data.data.doc;

  return (
    <>
      {pizza && (
        <div className={styles.container}>
          <div className={styles["image-wrapper"]}>
            <img src={`${FILE_URL}/${pizza?.imageUrl}`} alt={pizza.name} />
          </div>
          <div className={styles.details}>
            <div className={styles["details-texts"]}>
              <h1>{pizza.name}</h1>
              <p>Ingredients: {pizza.ingredients.join(", ")}</p>
            </div>
            <div className={styles["details-actions"]}>
              <LinkButton type="button">Update</LinkButton>
              <LinkButton type="button">Delete</LinkButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pizza;
