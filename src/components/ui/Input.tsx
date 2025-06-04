import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  outline: none;
  border-style: solid;
  border-color: var(--color-gray-200);
  border-width: 1px;
  padding: 0.75rem 1rem;
  transition: all 0.2s;
  max-width: 100%;
  color: var(--color-gray-950);
  border-radius: 6px;
  font-size: 12px;
  width: 100%;

  &:hover {
    border-color: var(--color-gray-300);
  }

  &:focus {
    border-color: var(--color-emerald-200);
    background: var(--color-emerald-50);
  }

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export default Input;
