import { Container } from "@mui/material";
import MainHeading from "../../ui/MainHeading";
import MealsCard from "./MealsCard";
import { useQuery } from "@tanstack/react-query";
import { getAllMeals } from "../../services/mealsApi";
import { IMeal } from "../../interfaces/IMeals";
import styles from "./Meals.module.css";

function Meals() {
  const { data: meals, isLoading } = useQuery({
    queryKey: ["meal"],
    queryFn: getAllMeals,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container
      maxWidth="lg"
      className="my-10 grid grid-cols-1 gap-2 py-5 grid-rows-[50px_1fr]rounded-md"
    >
      <MainHeading>Order Now</MainHeading>
      <div className={styles["card-wrapper"]}>
        {meals?.map((meal: IMeal) => (
          <MealsCard meal={meal} key={meal._id} />
        ))}
      </div>
    </Container>
  );
}

export default Meals;
