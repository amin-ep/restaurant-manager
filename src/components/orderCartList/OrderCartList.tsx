import styled from "styled-components";
import { OrderCartItem } from "../../types/OrderTypes";
import OrderCartListItem from "./OrderCartListItem";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function OrderCartList({ items }: { items: OrderCartItem[] | undefined }) {
  return (
    <StyledDiv>
      <h1>Items</h1>
      {items?.map((pizza) => (
        <OrderCartListItem
          key={pizza.pizza._id}
          quantity={pizza.quantity}
          pizza={pizza.pizza}
        />
      ))}
    </StyledDiv>
  );
}

export default OrderCartList;
