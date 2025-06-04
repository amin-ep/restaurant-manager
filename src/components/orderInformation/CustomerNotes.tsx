import styled from "styled-components";
import StatHeading from "./StatHeading";

const Container = styled.blockquote`
  margin: 0;
  width: 100%;
`;

const Text = styled.p`
  font-size: 12px;
  color: var(--color-gray-800);

  font-style: oblique;

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

function CustomerNotes({ description }: { description: string }) {
  return (
    <Container>
      <StatHeading>Customer Notes</StatHeading>
      <Text>{description}</Text>
    </Container>
  );
}

export default CustomerNotes;
