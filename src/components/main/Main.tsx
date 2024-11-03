import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container } from "@mui/material";

const StyledMain = styled.main`
  background-color: var(--color-stone-200);
  height: 100vh;
  overflow-y: auto;
  margin-top: 70px;
  width: 100%;
  transition: 0.5s all;
`;

function Main() {
  return (
    <StyledMain>
      <Container
        maxWidth="md"
        sx={{
          background: "var(--color-white)",
          marginTop: "1rem",
          marginBottom: "5rem",
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <Outlet />
      </Container>
    </StyledMain>
  );
}

export default Main;
