import PizzaList from "../components/PizzaList/PizzaList";
import LinkButton from "../ui/LinkButton";
import { Outlet } from "react-router-dom";
import Modal from "../ui/Modal";
import CreatePizzaForm from "../components/createPizzaForm/CreatePizzaForm";
import { useState } from "react";

function Menu() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => setModalIsOpen(false);
  return (
    <>
      {modalIsOpen && (
        <Modal onClose={handleCloseModal}>
          <CreatePizzaForm close={handleCloseModal} />
        </Modal>
      )}
      <PizzaList />
      <LinkButton
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Create New Pizza
      </LinkButton>
      <Outlet />
    </>
  );
}

export default Menu;
