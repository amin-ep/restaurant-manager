import { useOrder } from "../../hooks/useOrder";
import { IOrder } from "../../types/OrderTypes";
import LinkButton from "../../ui/LinkButton";
import { calculatePastTime } from "../../utils/helpers";
import styles from "./OrderInformation.module.css";
import cls from "classnames";
import OrderInformationDatePicker from "./OrderInformationDatePicker";
import OrderInformationTimePicker from "./OrderInformationTimePicker";
import { useCallback, useReducer } from "react";
import { toast } from "react-toastify";
import Loading from "../../ui/Loading";
import { format } from "date-fns";

interface IState {
  year: string | null;
  month: string | null;
  day: string | null;

  hour: string | null;
  minutes: string | null;
}

type ActionTypes =
  | {
      type: "date";
      payload: {
        year: IState["year"];
        month: IState["month"];
        day: IState["day"];
      };
    }
  | {
      type: "time";
      payload: {
        hour: IState["hour"];
        minutes: IState["minutes"];
      };
    };

const initialState: IState = {
  year: "",
  month: "",
  day: "",

  hour: "",
  minutes: "",
};

const reducer = (state: IState, action: ActionTypes) => {
  switch (action.type) {
    case "date":
      return {
        ...state,
        year: action.payload.year,
        month: action.payload.month,
        day: action.payload.day,
      };

    case "time":
      return {
        ...state,
        hour: action.payload.hour,
        minutes: action.payload.minutes,
      };

    default: {
      throw new Error("Unknown action type");
    }
  }
};

function OrderInformation({ order }: { order: IOrder | undefined }) {
  const [{ day, hour, minutes, month, year }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { updateOrderMutation, isUpdatingOrder } = useOrder();

  const handleSetDeliveryDate: (
    year: string,
    month: string,
    day: string
  ) => void = (year, month, day) => {
    dispatch({
      type: "date",
      payload: {
        year,
        month,
        day,
      },
    });
  };

  const handleSetDeliveryTime: (hour: string, minutes: string) => void = (
    hour,
    minutes
  ) => {
    dispatch({
      type: "time",
      payload: {
        hour,
        minutes,
      },
    });
  };

  const handleUpdateOrderStatus = useCallback(() => {
    if (order?.status === "waiting") {
      if (year && month && day && hour && minutes) {
        const date = new Date(
          `${year}-${month}-${day}T${hour}:${minutes}:00`
        ).toISOString();
        updateOrderMutation({
          id: order._id,
          payload: {
            status: "accepted",
            deliveryTime: date,
          },
        });
      } else {
        toast.error("Please set the delivery time");
      }
    } else if (order?.status === "accepted") {
      updateOrderMutation({
        id: order._id,
        payload: { status: "posted" },
      });
    }
  }, [
    order?.status,
    order?._id,
    year,
    month,
    day,
    hour,
    minutes,
    updateOrderMutation,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={cls(styles.info)}>
          <span>Order Date: </span>
          {calculatePastTime(order!.createdAt)}
        </p>
        <p className={cls(styles.info)}>
          <span>Order Status: </span>
          {order?.status}
        </p>
        {order?.deliveryTime && (
          <p className={cls(styles.info)}>
            <span>Delivery Time: </span>
            {format(order?.deliveryTime, "HH:mm:ss")}
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
      <div className={styles.actions}>
        {order?.status === "waiting" && (
          <>
            <OrderInformationDatePicker setDate={handleSetDeliveryDate} />
            <OrderInformationTimePicker setTime={handleSetDeliveryTime} />
          </>
        )}

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
            <LinkButton onClick={handleUpdateOrderStatus}>
              {isUpdatingOrder && <Loading />} Accept Order
            </LinkButton>
          )}
          {order?.status === "accepted" && (
            <LinkButton onClick={handleUpdateOrderStatus}>
              {isUpdatingOrder && <Loading />} Post Order
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderInformation;
