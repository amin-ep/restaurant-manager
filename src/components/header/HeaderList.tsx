import styled from "styled-components";
import IconButtonLink from "../ui/IconButtonLink";

import {
  HiArrowRightOnRectangle,
  HiBars3,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { useAuth } from "../../contexts/AuthContext";
import HeaderDarkModeButton from "./HeaderDarkModeButton";
import { useState } from "react";
import Alert from "../ui/Alert";

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 0.4rem;
`;

function HeaderList({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { logout } = useAuth();

  const [alert, setAlert] = useState(false);

  return (
    <>
      <List>
        <IconButtonLink title="list" onClick={onToggleSidebar}>
          <HiBars3 size={27} />
        </IconButtonLink>
        <Items>
          <IconButtonLink title="Account" to="account">
            <HiOutlineUserCircle size={27} />
          </IconButtonLink>
          <IconButtonLink title="Logout" onClick={() => setAlert(true)}>
            <HiArrowRightOnRectangle size={27} />
          </IconButtonLink>
          <HeaderDarkModeButton />
        </Items>
      </List>
      {alert && (
        <Alert
          action={logout}
          actionTextContent="Logout"
          close={() => setAlert(false)}
          heading="Logout Warning"
          message="Are you sure you wanna logout?"
        />
      )}
    </>
  );
}

export default HeaderList;
