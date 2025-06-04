import { Tooltip as BaseTooltip } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Styles = css`
  background-color: var(--color-gray-50);
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  border-radius: 6px;
  color: var(--color-gray-800);
  cursor: pointer;

  &:hover {
    background: var(--color-gray-100);
  }

  &:focus,
  &:active {
    outline: 2px solid var(--color-emerald-500);
  }
`;

const StyledLink = styled(Link)`
  ${Styles}
`;

const StyledButton = styled.button`
  ${Styles}
`;

const Tooltip = ({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) => {
  return <BaseTooltip title={title}>{children}</BaseTooltip>;
};

function HeaderListItem({
  title,
  onClick,
  to,
  children,
}: {
  title: string;
  onClick?: () => void;
  to?: string;
  children: ReactNode;
}) {
  if (onClick) {
    return (
      <li style={{ listStyle: "none" }}>
        <Tooltip title={title}>
          <StyledButton onClick={onClick} type="button">
            {children}
          </StyledButton>
        </Tooltip>
      </li>
    );
  }

  if (to) {
    return (
      <li style={{ listStyle: "none" }}>
        <Tooltip title={title}>
          <StyledLink to={to}>{children}</StyledLink>
        </Tooltip>
      </li>
    );
  }
}

export default HeaderListItem;
