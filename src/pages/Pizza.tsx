import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { OnePizzaResponseData } from "../types/PizzaTypes";
import { getPizza } from "../services/pizzaApi";
import styles from "./Pizza.module.css";
import { FILE_URL } from "../utils/constants";
import LinkButton from "../ui/LinkButton";
import { usePizza } from "../hooks/usePizza";
import { HiStar } from "react-icons/hi2";
import Spinner from "../ui/Spinner";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import UpdatePizzaForm from "../components/updatePizzaForm/UpdatePizzaForm";
import { calculateDiscountPercentage } from "../utils/helpers";

function Pizza() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    queryClient.removeQueries({
      queryKey: ["pizza"],
    });
  }, [queryClient]);

  const { data, isLoading: isLoadingPizza } = useQuery<
    AxiosResponse<OnePizzaResponseData>
  >({
    queryFn: () => getPizza(id!),
    queryKey: ["pizza"],
  });

  const { deletePizzaMutation } = usePizza();
  const navigate = useNavigate();

  const pizza = data?.data.data.doc;

  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <>
      {isLoadingPizza && <Spinner />}
      {pizza && !isLoadingPizza && (
        <div className={styles.container}>
          <div className={styles["image-wrapper"]}>
            {pizza.discount > 0 && (
              <div className={styles["discount-label"]}>
                <span>
                  {calculateDiscountPercentage(
                    pizza.unitPrice,
                    pizza.discount
                  ) +
                    " " +
                    "free"}
                </span>
              </div>
            )}
            <img src={`${FILE_URL}/${pizza?.imageUrl}`} alt={pizza.name} />
          </div>
          <div className={styles.details}>
            <div className={styles["details-texts"]}>
              <div className={styles["details-texts-header"]}>
                <h1>{pizza.name}</h1>
                <span className={styles.rate}>
                  <HiStar size={30} color="yellow" />
                  {pizza.ratingsAverage ? pizza.ratingsAverage : 0}
                </span>
              </div>
              <p>Ingredients: {pizza.ingredients.join(", ")}</p>
            </div>
            <div className={styles["details-action"]}>
              {pizza.discount > 0 ? (
                <div className={styles["details-discounted-price"]}>
                  <p className={styles["final-price"]}>${pizza.finalPrice}</p>
                  <p className={styles["unit-price"]}>${pizza.unitPrice}</p>
                </div>
              ) : (
                <div className={styles["details-price"]}>
                  <p className={styles["final-price"]}>${pizza.finalPrice}</p>
                </div>
              )}
              <div className={styles["details-action-buttons"]}>
                <LinkButton type="button" onClick={() => setModalIsOpen(true)}>
                  Update
                </LinkButton>
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
              {modalIsOpen && (
                <Modal onClose={handleCloseModal}>
                  <UpdatePizzaForm
                    close={handleCloseModal}
                    id={id!}
                    defaultValues={{
                      name: pizza.name,
                      discount: pizza.discount,
                      ingredients: pizza.ingredients,
                      unitPrice: pizza.unitPrice,
                      imageUrl: pizza.imageUrl,
                    }}
                  />
                </Modal>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pizza;
