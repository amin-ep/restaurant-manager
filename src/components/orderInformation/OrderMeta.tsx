import styled from "styled-components";
import CustomerNotes from "./CustomerNotes";
import OrderTime from "./OrderTime";

type Props = { description?: string; orderTime: Date };

const Container = styled.div`
  grid-area: orderMeta;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 640px) {
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`;

function OrderMeta({ description, orderTime }: Props) {
  return (
    <Container>
      {description && <CustomerNotes description={description} />}
      <OrderTime time={orderTime} />
    </Container>
  );
}

export default OrderMeta;
