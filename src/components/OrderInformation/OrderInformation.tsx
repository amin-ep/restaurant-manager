import { IOrder } from "../../types/OrderTypes";
import LinkButton from "../../ui/LinkButton";
import styles from "./OrderInformation.module.css";
function OrderInformation({ order }: { order: IOrder | undefined }) {
  console.log(order);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles["info"]}>
          <span>Order Date: </span>
          {order?.createdAt.toLocaleString()}
        </p>
        <p className={styles["info"]}>
          <span>Order Status: </span>
          {order?.status}
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles["info"]}>
          <span>Recipient: </span>
          {order?.customer.fullName}
        </p>
        <p className={styles["info"]}>
          <span>Phone: </span>
          {order?.phone}
        </p>
        <p className={styles["info"]}>
          <span>Address: </span>
          {order?.address.text}
        </p>
      </div>
      <div className={styles.actions}>
        <p className={styles["info"]}>
          <span>Total Price: </span>
          {/* {order?.cart} */}
        </p>
        <div>
          {order?.status === "posted" && (
            <span className={`${styles["status"]} ${styles[order?.status]}`}>
              Order has {order.status}
            </span>
          )}
          {order?.status === "received" && (
            <span className={`${styles["status"]} ${styles[order?.status]}`}>
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
