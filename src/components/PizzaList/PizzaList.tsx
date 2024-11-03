import styled from "styled-components";
import { usePizza } from "../../hooks/usePizza";
import PizzaItem from "./PizzaItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 2rem 0;
  gap: 0.8rem;
`;

function PizzaList() {
  const { pizzaData } = usePizza();

  return (
    <>
      <h1>Menu</h1>
      <Wrapper>
        {pizzaData?.data.data.docs.map((pizza, index) => (
          <PizzaItem pizza={pizza} number={index + 1} key={pizza._id} />
        ))}
      </Wrapper>
    </>
  );
}

export default PizzaList;
