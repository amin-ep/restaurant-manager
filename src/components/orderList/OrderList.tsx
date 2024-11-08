import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function OrderList() {
  return (
    <div>
      <Row>
        <h1>Orders</h1>
      </Row>
    </div>
  );
}

export default OrderList;
