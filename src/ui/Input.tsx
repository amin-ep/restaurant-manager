import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border: 2px solid var(--color-stone-200);
  padding: 0.75rem 1rem;
  transition: all 0.3s;
  border-radius: 999px;
  max-width: 100%;

  &:focus {
    border-color: var(--color-sky-700);
    box-shadow: 0 5px 14px var(--color-sky-800);
  }
`;

export default Input;
