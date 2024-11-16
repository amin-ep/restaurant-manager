import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { Container as MUIContainer } from "@mui/material";
import LinkButton from "./LinkButton";

const Container = styled(MUIContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <>
      <GlobalStyles />
      <Container maxWidth="sm">
        <h1>Something went wrong!🧐</h1>
        <p>{error.message}</p>
        <>
          <LinkButton onClick={resetErrorBoundary}>Try Again</LinkButton>
        </>
      </Container>
    </>
  );
}

export default ErrorFallback;
