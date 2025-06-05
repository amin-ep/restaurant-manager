import { Container as MUIContainer } from "@mui/material";
import LinkButton from "../components/ui/LinkButton";
import styled from "styled-components";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Container = styled(MUIContainer)`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  margin: 6rem auto;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;

const Span = styled.span`
  font-size: 14rem;
  color: var(--color-gray-8);
  font-family: RubikWetPaint;

  @media (max-width: 570px) {
    font-size: 10rem;
  }

  @media (max-width: 400px) {
    font-size: 7rem;
  }
`;

const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Img = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;

  @media (max-width: 570px) {
    width: 10rem;
    height: 10rem;
  }
  @media (max-width: 400px) {
    width: 7rem;
    height: 7rem;
  }
`;

const TextWrapper = styled.div`
  color: var(--color-gray-8);
  text-align: center;
  font-family: RubikWetPaint;
  & > h1 {
    font-size: 4.2rem;
    color: var(--color-green-1);
    text-transform: uppercase;

    @media (max-width: 570px) {
      font-size: 3.2rem;
    }
  }

  & > p {
    font-size: 2rem;
    @media (max-width: 570px) {
      font-size: 1rem;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NotFound() {
  useDocumentTitle("Not found");

  return (
    <Container maxWidth="sm">
      <NumberWrapper>
        <Span>4</Span>
        <Img src="/images/circle-pizza.png" />
        <Span>4</Span>
      </NumberWrapper>
      <TextWrapper>
        <h1>Error</h1>
        <p>Page not found!</p>
      </TextWrapper>
      <Actions>
        <LinkButton to="/">Back to home</LinkButton>
      </Actions>
    </Container>
  );
}

export default NotFound;
