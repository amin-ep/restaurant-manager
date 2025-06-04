import styled from "styled-components";

const Label = styled.label`
  color: var(--color-gray-800);
  transition: all 0.2s;
  width: fit-content;
  font-size: 12px;
  font-weight: 500;

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export default Label;
