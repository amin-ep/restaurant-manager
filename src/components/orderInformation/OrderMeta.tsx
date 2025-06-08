import styled from "styled-components";
import CustomerNotes from "./CustomerNotes";
import OrderTime from "./OrderTime";
import AdminNotes from "./AdminNotes";
import { IOrder } from "../../types/OrderTypes";

type Props = {
  description?: string;
  orderTime: Date;
  id: string;
  adminNotes: IOrder["adminNotes"];
};

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

function OrderMeta({ description, orderTime, adminNotes, id }: Props) {
  return (
    <Container>
      {description && <CustomerNotes description={description} />}
      <AdminNotes orderId={id} adminNotes={adminNotes} />
      <OrderTime time={orderTime} />
    </Container>
  );
}

export default OrderMeta;
