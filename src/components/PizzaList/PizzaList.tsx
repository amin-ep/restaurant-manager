import styled from "styled-components";
import { usePizza } from "../../hooks/usePizza";
import PizzaItem from "./PizzaItem";
import Pagination from "../../ui/Pagination";
import Filter from "../../ui/Filter";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 2rem 0;
  gap: 0rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function PizzaList() {
  const { pizzaData } = usePizza();

  const pizzaFilterOptions = [
    { label: "all", value: "all" },
    { label: "With Discount", value: "with-discount" },
    { label: "No Discount", value: "no-discount" },
  ];

  return (
    <>
      <Row>
        <h1>Menu</h1>
        <Filter filter="discount" options={pizzaFilterOptions} />
      </Row>

      <Wrapper>
        {pizzaData?.data.data.docs.map((pizza, index) => (
          <PizzaItem pizza={pizza} number={index + 1} key={pizza._id} />
        ))}
      </Wrapper>
      {/* FIXME */}
      {pizzaData && (
        <Pagination
          count={pizzaData.data.dataNum}
          totalPages={pizzaData.data.totalPages}
          pageSize={pizzaData.data.data.docs.length}
        />
      )}
    </>
  );
}

export default PizzaList;
