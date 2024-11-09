import LinkButton from "../ui/LinkButton";
import { Outlet } from "react-router-dom";
import Modal from "../ui/Modal";
import CreatePizzaForm from "../components/createPizzaForm/CreatePizzaForm";
import { useState } from "react";
import MenuTable from "../components/MenuTable/MenuTable";

function Menu() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <>
      <MenuTable />
      <LinkButton
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Create New Pizza
      </LinkButton>
      {modalIsOpen && (
        <Modal onClose={handleCloseModal}>
          <CreatePizzaForm close={handleCloseModal} />
        </Modal>
      )}
      <Outlet />
    </>
  );
}

export default Menu;
