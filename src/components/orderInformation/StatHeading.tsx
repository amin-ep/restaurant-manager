import React from "react";
import styled from "styled-components";

type Props = { children: React.ReactNode };

const StyledHeading = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

function StatHeading({ children }: Props) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default StatHeading;
