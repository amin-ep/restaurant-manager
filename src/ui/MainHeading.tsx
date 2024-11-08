import { ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function MainHeading({
  children,
  label,
}: {
  children?: ReactNode;
  label: string;
}) {
  return (
    <StyledDiv>
      <h1>{label}</h1>
      {children}
    </StyledDiv>
  );
}

export default MainHeading;
