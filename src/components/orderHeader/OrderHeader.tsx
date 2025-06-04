import styled from "styled-components";

const Heading = styled.h2`
  font-size: 18px;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

function OrderHeader() {
  return (
    <header>
      <Heading>Order Summary</Heading>
    </header>
  );
}

export default OrderHeader;
