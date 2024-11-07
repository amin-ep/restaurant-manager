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
  padding: 0.7rem 2.5rem;
  color: var(--color-gray-9);
  height: 60px;
  transition: 0.5s all;
  border-right: 4px solid transparent;
  &:hover {
    color: var(--color-green-1);
    gap: 1.5rem;
  }

  &.active {
    background: var(--color-gray-1);
    border-right: 4px solid var(--color-green-1);
    color: var(--color-green-2);
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
