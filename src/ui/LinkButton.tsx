import { ReactNode } from "react";
import { Link as BaseLink } from "react-router-dom";
import styled, { css } from "styled-components";

const BasicStyles = css`
  background: linear-gradient(
    to bottom right,
    var(--color-green-1),
    var(--color-green-2)
  );
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem var(--color-lime),
      0.125rem 0.125rem 1rem var(--color-lime);
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem var(--color-green-1),
      0.125rem 0.125rem 1rem var(--color-green-2);
  }
`;

const Button = styled.button`
  ${BasicStyles}
`;

const Link = styled(BaseLink)`
  ${BasicStyles}
`;

export default function LinkButton({
  onClick,
  to,
  children,
  type,
  className,
}: {
  onClick?: () => void;
  to?: string;
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
}) {
  if (onClick || type)
    return (
      <Button className={className} onClick={onClick} type={type}>
        {children}
      </Button>
    );
  else if (to) return <Link to={to}>{children}</Link>;
}
