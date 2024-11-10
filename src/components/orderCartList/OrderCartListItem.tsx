import styles from "./OrderCartListItem.module.css";
import { FILE_URL } from "../../utils/constants";
import { HiOutlineInformationCircle, HiStar } from "react-icons/hi2";
import { IPizza } from "../../types/PizzaTypes";
import IconButtonLink from "../../ui/IconButtonLink";

function OrderCartListItem({
  pizza,
  quantity,
}: {
  pizza: IPizza;
  quantity: number;
}) {
  return (
    <div className={styles.item}>
      <div className={styles["item-col-1"]}>
        <span className={styles["item-quantity"]}>#{quantity}</span>
        <img src={`${FILE_URL}/${pizza.imageUrl}`} alt={pizza.name} />
        <div className={styles["item-details"]}>
          <p className={styles.name}>{pizza.name}</p>
          <p className={styles.price}>
            {pizza.discount > 1 ? (
              <>
                <span className={styles["final-price"]}>
                  ${pizza.finalPrice}
                </span>
                <span className={styles["unit-price"]}>${pizza.unitPrice}</span>
              </>
            ) : (
              <span className={styles["final-price"]}>${pizza.finalPrice}</span>
            )}
          </p>
        </div>
      </div>
      <div className={styles["item-col-2"]}>
        <span className={styles["ratings-average"]}>
          <HiStar size={20} color="yellow" />
          {pizza.ratingsAverage ?? 0}
        </span>

        <IconButtonLink to={`/menu/${pizza._id}`}>
          <HiOutlineInformationCircle size={30} />
        </IconButtonLink>
      </div>
    </div>
  );
}

export default OrderCartListItem;
