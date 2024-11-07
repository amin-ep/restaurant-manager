import PizzaList from "../components/PizzaList/PizzaList";
// import LinkButton from "../ui/LinkButton";
import { Outlet } from "react-router-dom";

function Menu() {
  return (
    <>
      <PizzaList />
      {/* <LinkButton to="create-pizza">Create New Pizza</LinkButton> */}
      <Outlet />
    </>
  );
}

export default Menu;
