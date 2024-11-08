import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { OnePizzaResponseData } from "../types/PizzaTypes";
import { getPizza } from "../services/pizzaApi";
import styles from "./Pizza.module.css";
import { FILE_URL } from "../utils/constants";
import LinkButton from "../ui/LinkButton";
import { usePizza } from "../hooks/usePizza";

function Pizza() {
  const { id } = useParams();
  const { data, isLoading: isLoadingPizza } = useQuery<
    AxiosResponse<OnePizzaResponseData>
  >({
    queryFn: () => getPizza(id!),
    queryKey: ["pizza"],
  });

  const { deletePizzaMutation, isDeleting } = usePizza();
  const navigate = useNavigate();

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
              <LinkButton
                onClick={() => {
                  deletePizzaMutation(pizza._id);
                  navigate(-1);
                }}
                type="button"
              >
                Delete
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pizza;
