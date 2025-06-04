import { BsFileText } from "react-icons/bs";
import { PiForkKnife } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import SidebarListItem from "./SidebarListItem";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  padding: 0.5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 0;
  gap: 0.75rem;
`;

function SidebarList() {
  return (
    <Nav>
      <List>
        <SidebarListItem to="/" icon={<GrHomeRounded />}>
          Home
        </SidebarListItem>
        <SidebarListItem icon={<PiForkKnife />} to="menu">
          Menu
        </SidebarListItem>
        <SidebarListItem icon={<BsFileText />} to="orders">
          Orders
        </SidebarListItem>
        <SidebarListItem icon={<HiOutlineUsers />} to="customers">
          Customers
        </SidebarListItem>
      </List>
    </Nav>
  );
}

export default SidebarList;
