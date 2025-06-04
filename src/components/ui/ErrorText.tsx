import styled from "styled-components";

const ErrorText = styled.p`
  color: var(--color-error);

  font-size: 12px;

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export default ErrorText;
