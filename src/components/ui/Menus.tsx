import styled, { css } from "styled-components";
import { Link as BaseLink } from "react-router-dom";
import { createContext, ReactNode, useContext, useState } from "react";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import IconButtonLink from "./IconButtonLink";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 100px;
  background: var(--color-gray-50);
  width: 160px;
  z-index: 20;
  right: 20px;
  top: 64px;
  border: 2px solid var(--color-gray-200);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const ListItemStyles = css`
  background: transparent;
  color: var(--color-gray-900);
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-decoration: none;

  & > span {
    font-size: 15px;
    text-align: left;
    width: 100%;
  }
  &:hover {
    background: var(--color-gray-200);
  }
`;

const Button = styled.button`
  ${ListItemStyles}
`;

const Link = styled(BaseLink)`
  ${ListItemStyles}
`;

const MenuContext = createContext({
  close: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  open: (_id: string) => {},
  openId: "",
});

function Menus({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState("");

  const open = (id: string) => (openId === "" ? setOpenId(id) : setOpenId(""));

  const close = () => setOpenId("");

  return (
    <MenuContext.Provider value={{ close, open, openId }}>
      {children}
    </MenuContext.Provider>
  );
}

function MenuButton({ id }: { id: string }) {
  const { open } = useContext(MenuContext);

  return (
    <IconButtonLink
      onClick={() => {
        open(id);
      }}
    >
      <HiOutlineEllipsisVertical size={26} />
    </IconButtonLink>
  );
}

function List({ children, id }: { children: ReactNode; id: string }) {
  const { close, openId } = useContext(MenuContext);
  const ref = useOutsideClick(close);

  if (openId === id)
    return (
      <StyledMenu id={id} ref={ref}>
        {children}
      </StyledMenu>
    );
  else return null;
}

function Item({
  to,
  onClick,
  icon,
  label,
}: {
  to?: string;
  onClick?: () => void;
  icon: ReactNode;
  label: string;
}) {
  if (to) {
    return (
      <Link to={to}>
        {icon}
        <span>{label}</span>
      </Link>
    );
  } else if (onClick) {
    return (
      <Button onClick={onClick} type="button">
        {icon}
        <span>{label}</span>
      </Button>
    );
  }
}

Menus.Item = Item;
Menus.Button = MenuButton;
Menus.List = List;

export default Menus;
