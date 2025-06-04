import { ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div<{ breakPoint: number }>`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: ${(props) => props.breakPoint}px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

function MainHeading({
  breakPoint,
  children,
  label,
}: {
  children?: ReactNode;
  label: string;
  breakPoint: number;
}) {
  return (
    <StyledDiv breakPoint={breakPoint}>
      <h1>{label}</h1>
      {children}
    </StyledDiv>
  );
}

export default MainHeading;
