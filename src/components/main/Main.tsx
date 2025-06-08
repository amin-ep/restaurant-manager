import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container } from "@mui/material";

const StyledMain = styled.main`
  margin-top: 4rem;
  width: 100%;
  transition: 0.5s all;
  padding-inline: 0.5rem;
  padding-top: 1rem;
`;

function Main() {
  return (
    <StyledMain>
      <Container
        maxWidth="md"
        sx={{
          background: "var(--color-gray-50)",
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
