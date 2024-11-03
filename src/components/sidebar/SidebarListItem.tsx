import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./SidebarListitem.module.css";

const NavLink = styled(BaseNavLink)`
  background-color: transparent;
  text-decoration: none;
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
  padding: 0.7rem;
  border-radius: 999px;
  color: var(--color-stone-900);
  height: 60px;
  transition: 0.5s all;
  &:hover {
    background: var(--color-sky-200);
  }

  & > span {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  &.active {
    background: var(--color-sky-200);
    color: var(--color-sky-800);
    & > span {
      color: var(--color-white);
      background-color: var(--color-sky-950);
    }
  }
`;

function SidebarListItem({
  children,
  to,
  icon,
}: {
  children: ReactNode;
  to: string;
  icon: ReactNode;
}) {
  return (
    <li className={styles.item}>
      <NavLink to={to}>
        <span>{icon!}</span>
        {children}
      </NavLink>
    </li>
  );
}

export default SidebarListItem;
