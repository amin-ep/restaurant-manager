import { IOrder } from "../../types/OrderTypes";
import LinkButton from "../../ui/LinkButton";
import styles from "./OrderInformation.module.css";
import cls from "classnames";
function OrderInformation({ order }: { order: IOrder | undefined }) {
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
      <div className={styles.actions}>
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
                console.log("status");
              }}
            >
              Accept Order
            </LinkButton>
          )}
          {order?.status === "accepted" && (
            <LinkButton
              onClick={() => {
                console.log("status");
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
