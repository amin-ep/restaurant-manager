import { ReactNode } from "react";
import { Link as BaseLink } from "react-router-dom";
import styled, { css } from "styled-components";

const BasicStyles = css`
  all: unset;
  min-width: 100px;
  height: 30px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  position: relative;
  color: var(--color-gray-0);
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -9999;
    transition: all 0.4s;
  }

  &::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background-color: var(--color-green-1);
    border-radius: 8px;
  }

  &::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background-color: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 48px;
  }

  &:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  &:hover::after {
    border-radius: 8px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  &:active::after {
    transition: 0s;
    transform: translate(0, 5%);
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

/* CSS */
