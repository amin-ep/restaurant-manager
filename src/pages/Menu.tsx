import { useState } from "react";
import { Outlet } from "react-router-dom";
import PizzaForm from "../components/pizzaForm/PizzaForm";
import MenuTable from "../components/menuTable/MenuTable";
import LinkButton from "../components/ui/LinkButton";
import styled from "styled-components";

const Button = styled(LinkButton)`
  margin: 1rem 0;
`;

function Menu() {
  const [createPizzaIsOpen, setCreatePizzaIsOpen] = useState(false);
  const toggleCreatePizza = () => setCreatePizzaIsOpen((state) => !state);

  return (
    <>
      <MenuTable />
      <PizzaForm isOpen={createPizzaIsOpen} />
      <Button onClick={toggleCreatePizza}>
        {createPizzaIsOpen ? "Close" : "Open"} Add Pizza Form
      </Button>
      <Outlet />
    </>
  );
}

export default Menu;
