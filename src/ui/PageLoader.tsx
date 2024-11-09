import styled from "styled-components";
import Spinner from "./Spinner";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

function PageLoader() {
  return (
    <StyledDiv>
      <Spinner />
    </StyledDiv>
  );
}

export default PageLoader;
