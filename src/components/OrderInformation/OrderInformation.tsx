import { useOrder } from "../../hooks/useOrder";
import { IOrder } from "../../types/OrderTypes";
import LinkButton from "../../ui/LinkButton";
import styles from "./OrderInformation.module.css";
import cls from "classnames";

function OrderInformation({ order }: { order: IOrder | undefined }) {
  const { updateOrderMutation } = useOrder();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={cls(styles.info)}>
          <span>Order Date: </span>
          {order?.createdAt.toLocaleString()}
        </p>
        <p className={cls(styles.info)}>
          <span>Order Status: </span>
          {order?.status}
        </p>
        {order?.deliveryTime && (
          <p className={cls(styles.info)}>
            <span>Delivery Time: </span>
            {order?.deliveryTime.toLocaleString()}
          </p>
        )}
      </div>
      <div className={styles.row}>
        <p className={cls(styles.info, styles.recipient)}>
          <span>Recipient: </span>
          {order?.customer.fullName}
        </p>
        <p className={cls(styles.info, styles.phone)}>
          <span>Phone: </span>
          {order?.phone}
        </p>
        <p className={cls(styles.info, styles.address)}>
          <span>Address: </span>
          {order?.address.text}
        </p>
      </div>
      <div className={cls(styles.row, styles.actions)}>
        <p className={cls(styles.info, styles.price)}>
          <span>Total Price: </span>${order?.cart.totalPrice}
        </p>
        <div>
          {order?.status === "posted" && (
            <span className={cls(styles.status, styles[order?.status])}>
              Order has {order.status}
            </span>
          )}
          {order?.status === "received" && (
            <span className={cls(styles.status, styles[order?.status])}>
              Order has {order.status}
            </span>
          )}
          {order?.status === "waiting" && (
            <LinkButton
              onClick={() => {
                updateOrderMutation({
                  id: order._id,
                  payload: { status: "accepted" },
                });
              }}
            >
              Accept Order
            </LinkButton>
          )}
          {order?.status === "accepted" && (
            <LinkButton
              onClick={() => {
                updateOrderMutation({
                  id: order._id,
                  payload: { status: "posted" },
                });
              }}
            >
              Post Order
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderInformation;
