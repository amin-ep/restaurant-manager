import { useOrder } from "../../hooks/useOrder";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import { FILE_URL } from "../../utils/constants";
import styled from "styled-components";
import { HiOutlineInformationCircle, HiOutlineTrash } from "react-icons/hi2";

const StyledImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 2px;
`;

const StyledSpan = styled.span`
  width: 35px;
  height: 35px;
  font-size: 30px;
  color: var(--color-gray-8);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 0;
`;

function OrderTableBody() {
  const { orders } = useOrder();

  return (
    <>
      {orders?.data.data.docs.map((order) => (
        <Table.Body key={order._id}>
          <>
            <Table.BodyCell>
              {order.cart.cartItems.slice(0, 3).map((cart) => (
                <StyledImg
                  src={`${FILE_URL}/${cart.pizza.imageUrl}`}
                  alt={cart.pizza.name}
                  key={cart._id}
                />
              ))}
              {order.cart.cartItems.length > 3 && <StyledSpan>...</StyledSpan>}
            </Table.BodyCell>
            <Table.BodyCell>{order.customer.fullName}</Table.BodyCell>
            <Table.BodyCell>{order.createdAt.toString()}</Table.BodyCell>
            <Table.BodyCell>{order.phone}</Table.BodyCell>
            <Table.BodyCell>{order.status}</Table.BodyCell>
            <Table.BodyCell>
              <Menus>
                <Menus.Button id={order._id} />
                <Menus.List id={order._id}>
                  <Menus.Item
                    icon={<HiOutlineInformationCircle size={30} />}
                    label="More info"
                    to={`/order/${order._id}`}
                  />
                  <Menus.Item
                    icon={<HiOutlineTrash size={30} />}
                    label="Delete"
                    onClick={() => {
                      console.log("delete");
                    }}
                  />
                </Menus.List>
              </Menus>
            </Table.BodyCell>
          </>
        </Table.Body>
      ))}
    </>
  );
}

export default OrderTableBody;
