import moment from "moment";
import { HiOutlineInformationCircle, HiOutlineTrash } from "react-icons/hi2";
import styled from "styled-components";
import { useOrder } from "../../hooks/useOrder";
import { IOrder } from "../../types/OrderTypes";
import { FILE_URL } from "../../utils/constants";
import Menus from "../ui/Menus";
import Spinner from "../ui/Spinner";
import Table from "../ui/Table";

const StyledImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 2px;
  object-fit: cover;
`;

const StyledSpan = styled.span`
  width: 35px;
  height: 35px;
  font-size: 30px;
  color: var(--color-gray-9);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 0;
  vertical-align: middle;
`;

const Status = styled.span<{ status: IOrder["status"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  background: ${(props) =>
    props.status === "waiting"
      ? "#FFA726"
      : props.status === "accepted"
      ? "#66BB6A"
      : props.status === "posted"
      ? "#42A5F5"
      : props.status === "received"
      ? "#757575"
      : ""};
  color: #121212;
  border-radius: 999px;
  width: 100%;
`;

function OrderTableBody() {
  const { orders, isLoadingOrders, mutateDeleteOrder } = useOrder();

  return (
    <>
      {isLoadingOrders ? (
        <>
          <Spinner />
        </>
      ) : (
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
                  {order.cart.cartItems.length > 3 && (
                    <StyledSpan>...</StyledSpan>
                  )}
                </Table.BodyCell>
                <Table.BodyCell>
                  {order.customer.firstName + " " + order.customer.lastName}
                </Table.BodyCell>
                <Table.BodyCell>
                  <time>
                    {moment(order.createdAt, "YYYYMMDD").fromNow(true)}
                  </time>
                </Table.BodyCell>
                <Table.BodyCell>{order.phone}</Table.BodyCell>
                <Table.BodyCell>
                  <Status status={order.status}>{order.status}</Status>
                </Table.BodyCell>
                <Table.BodyCell>
                  <Menus>
                    <Menus.Button id={order._id} />
                    <Menus.List id={order._id}>
                      <Menus.Item
                        icon={<HiOutlineInformationCircle size={30} />}
                        label="More info"
                        to={`/orders/${order._id}`}
                      />
                      <Menus.Item
                        icon={<HiOutlineTrash size={30} />}
                        label="Delete"
                        onClick={() => {
                          mutateDeleteOrder(order._id);
                        }}
                      />
                    </Menus.List>
                  </Menus>
                </Table.BodyCell>
              </>
            </Table.Body>
          ))}
        </>
      )}
    </>
  );
}

export default OrderTableBody;
