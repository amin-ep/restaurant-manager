import styled from "styled-components";
import Logo from "../../ui/Logo";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  padding: 0.4rem 0;
`;

function SidebarLogo() {
  return (
    <StyledDiv>
      <Logo size="large" />
      <h1>Pizza Passion</h1>
    </StyledDiv>
  );
}

export default SidebarLogo;
