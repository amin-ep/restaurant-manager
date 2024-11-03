import styled from "styled-components";
import IconButtonLink from "../../ui/IconButtonLink";

import {
  HiArrowRightOnRectangle,
  HiBars3,
  HiOutlineUserCircle,
  HiOutlineMoon,
} from "react-icons/hi2";
import { useAuth } from "../../contexts/AuthContext";

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
`;

function HeaderList({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { logout } = useAuth();

  return (
    <List>
      <IconButtonLink onClick={onToggleSidebar}>
        <HiBars3 size={27} />
      </IconButtonLink>
      <Items>
        <IconButtonLink
          onClick={() => {
            console.log("sss");
          }}
        >
          <HiOutlineUserCircle size={27} />
        </IconButtonLink>
        <IconButtonLink
          onClick={() => {
            console.log("sss");
          }}
        >
          <HiOutlineMoon size={27} />
        </IconButtonLink>
        <IconButtonLink onClick={logout}>
          <HiArrowRightOnRectangle size={27} />
        </IconButtonLink>
      </Items>
    </List>
  );
}

export default HeaderList;
