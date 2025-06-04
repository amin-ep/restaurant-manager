import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
import { ReactNode } from "react";

const StyledLi = styled.li`
  width: 100%;
  padding: 0;
`;

const NavLink = styled(BaseNavLink)`
  background-color: transparent;
  text-decoration: none;
  width: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  color: var(--color-gray-950);
  transition: 0.2s all;
  border-radius: 8px;

  &:hover {
    color: var(--color-emerald-500);
    gap: 1.5rem;
    background: var(--color-gray-100);
  }

  &.active {
    gap: 1.5rem;
    color: var(--color-emerald-500);
  }

  &.active:hover {
    background: unset;
  }

  & > span {
    font-size: 16px;
  }

  @media (min-width: 640px) {
    font-size: 14px;

    & > span {
      font-size: 18px;
    }
  }
  @media (min-width: 1024) {
    font-size: 16px;
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
    <StyledLi>
      <NavLink to={to}>
        <span>{icon!}</span>
        {children}
      </NavLink>
    </StyledLi>
  );
}

export default SidebarListItem;
