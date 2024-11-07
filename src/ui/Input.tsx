import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  outline: none;
  border: 2px solid var(--color-gray-2);
  padding: 0.75rem 1rem;
  transition: all 0.3s;
  border-radius: 999px;
  max-width: 100%;
  color: var(--color-gray-8);

  &:focus {
    border-color: var(--color-green-1);
    box-shadow: 0 5px 14px var(--color-lime);
  }
`;

export default Input;
