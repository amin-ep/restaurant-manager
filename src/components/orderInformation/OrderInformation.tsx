import styled from "styled-components";
import { IOrder } from "../../types/OrderTypes";
import CartItems from "./CartItems";
import DeliveryTime from "./DeliveryTime";
import OrderMeta from "./OrderMeta";
import OrderStatus from "./OrderStatus";

const Container = styled.div`
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-areas: "orderStatus" "deliveryTime" "orderMeta" "cartItems";
  gap: 0.75rem;

  @media (min-width: 425px) {
    gap: 1rem;
  }

  @media (min-width: 640px) {
    padding: 1rem;
    gap: 1.25rem;

    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "orderStatus deliveryTime" "orderMeta orderMeta" "cartItems cartItems";
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;

    grid-template-areas: "orderStatus deliveryTime" "cartItems orderMeta" "cartItems orderMeta";
  }

  @media (min-width: 1024px) {
    padding: 1.75rem;
    gap: 1.75rem;
  }
`;

function OrderInformation({ order }: { order: IOrder }) {
  return (
    <Container>
      <OrderStatus status={order.status} />
      <DeliveryTime />
      <OrderMeta orderTime={order.createdAt} description={order.description} />
      <CartItems items={order.cart.cartItems} />
    </Container>
  );
}

export default OrderInformation;
