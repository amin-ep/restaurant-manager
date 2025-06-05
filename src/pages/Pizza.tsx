import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Alert from "../components/ui/Alert";
import LinkButton from "../components/ui/LinkButton";
import Spinner from "../components/ui/Spinner";
import { deletePizza, getPizza } from "../services/pizzaApi";
import { AxiosDataErrorProps } from "../types/AxiosTypes";
import { OnePizzaResponseData } from "../types/PizzaTypes";
import { FILE_URL } from "../utils/constants";
import { calculateDiscountPercentage } from "../utils/helpers";
import NotFound from "./NotFound";
import styles from "./Pizza.module.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

const StyledSpan = styled.span`
  font-size: 12px;
  color: var(--color-gray-700);
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 640px) {
    aspect-ratio: none;
    height: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

function Pizza() {
  const [alert, setAlert] = useState(false);
  const { id } = useParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.removeQueries({
      queryKey: ["pizza"],
    });
  }, [queryClient]);

  const {
    data,
    isLoading: isLoadingPizza,
    isError,
  } = useQuery<AxiosResponse<OnePizzaResponseData>>({
    queryFn: () => getPizza(id!),
    queryKey: ["pizza"],
  });
  useDocumentTitle(`Pizza "${data?.data.data.document.name}"`);

  const navigate = useNavigate();

  // Delete Pizza
  const { mutate: deletePizzaMutation, isLoading: isDeleting } = useMutation({
    mutationKey: ["pizzas"],
    mutationFn: deletePizza,
    onSuccess() {
      queryClient
        .invalidateQueries({
          queryKey: ["pizzas"],
        })
        .then(() => {
          toast.success("Item deleted successfully");
          navigate("/menu");
        });
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });

  const pizza = data?.data.data.document;

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      {isLoadingPizza && <Spinner />}
      {pizza && !isLoadingPizza && (
        <section className={styles.container}>
          <div className={styles.imageWrapper}>
            <StyledSpan>
              Added At:{" "}
              <time>{moment(pizza.createdAt, "YYYYMMDD").fromNow(true)}</time>
            </StyledSpan>

            <StyledImg src={`${FILE_URL}/${pizza.imageUrl}`} alt={pizza.name} />
          </div>

          <article className={styles.statsWrapper}>
            <div className={styles.nameWrapper}>
              <h2 className={styles.name}>{pizza.name}</h2>
            </div>

            <div className={styles.statsRows}>
              <StatsRow title="Unit Price" value={`$${pizza.unitPrice}`} />
              <StatsRow title="Final Price" value={`$${pizza.finalPrice}`} />
              <StatsRow title="Discounted Price" value={pizza.discount} />
              <StatsRow
                title="Discount Percentage"
                value={calculateDiscountPercentage(
                  pizza.unitPrice,
                  pizza.discount
                )}
              />

              <StatsRow title="Ratings Average" value={4.5} />
              <StatsRow title="Ratings Counts" value={127} />
            </div>
          </article>

          <div className={styles.bottomSheet}>
            <div className={styles.ingredients}>
              <StyledSpan>Ingredients</StyledSpan>
              <p className={styles.value}>{pizza.ingredients.join(", ")}</p>
            </div>

            <div className={styles.actions}>
              <LinkButton to="edit">Update</LinkButton>
              <LinkButton
                onClick={() => {
                  setAlert(true);
                }}
              >
                Delete
              </LinkButton>
            </div>
          </div>
        </section>
      )}
      {alert && (
        <Alert
          action={() => deletePizzaMutation(id!)}
          actionTextContent="Delete"
          close={() => setAlert(false)}
          heading={`Delete "${pizza?.name}"`}
          message="Are you sure you wanna delete this item?this would delete all the data of this pizza."
          isActionPending={isDeleting}
        />
      )}
    </>
  );
}

function StatsRow({ title, value }: { title: string; value: string | number }) {
  return (
    <Row>
      <StyledSpan>{title}</StyledSpan>
      <p className={styles.value}>{value}</p>
    </Row>
  );
}

export default Pizza;
