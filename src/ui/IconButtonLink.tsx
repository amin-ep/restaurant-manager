import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Styles = css`
  background-color: transparent;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  outline: none;
  border-radius: 6px;
  color: var(--color-stone-900);
  cursor: pointer;

  &:hover {
    background: var(--color-stone-200);
  }
`;

const StyledLink = styled(Link)`
  ${Styles}
`;

const StyledButton = styled.button`
  ${Styles}
`;

function HeaderListItem({
  onClick,
  to,
  children,
}: {
  onClick?: () => void;
  to?: string;
  children: ReactNode;
}) {
  if (onClick) {
    return (
      <li style={{ listStyle: "none" }}>
        <StyledButton onClick={onClick} type="button">
          {children}
        </StyledButton>
      </li>
    );
  }

  if (to) {
    return (
      <li style={{ listStyle: "none" }}>
        <StyledLink to={to}>{children}</StyledLink>
      </li>
    );
  }
}

export default HeaderListItem;
