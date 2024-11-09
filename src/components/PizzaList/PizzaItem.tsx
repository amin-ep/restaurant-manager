import { IPizza } from "../../types/PizzaTypes";
import { FILE_URL } from "../../utils/constants";
import styles from "./PizzaItem.module.css";
import {
  HiStar,
  HiOutlineTrash,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import Menus from "../../ui/Menus";
import { usePizza } from "../../hooks/usePizza";

function PizzaItem({ pizza, number }: { pizza: IPizza; number: number }) {
  const {
    discount,
    finalPrice,
    imageUrl,
    name,
    unitPrice,
    _id: id,
    ratingsAverage,
  } = pizza;

  const { deletePizzaMutation } = usePizza();

  return (
    <div className={styles.item}>
      <div className={styles["item-col-1"]}>
        <span className={styles["item-number"]}>#{number}</span>
        <img src={`${FILE_URL}/${imageUrl}`} alt={name} />
        <div className={styles["item-details"]}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>
            {discount > 1 ? (
              <>
                <span className={styles["final-price"]}>${finalPrice}</span>
                <span className={styles["unit-price"]}>${unitPrice}</span>
              </>
            ) : (
              <span className={styles["final-price"]}>${finalPrice}</span>
            )}
          </p>
        </div>
      </div>
      <div className={styles["item-col-2"]}>
        <span className={styles.inventory}>
          <HiStar size={20} color="yellow" />
          {ratingsAverage ? ratingsAverage : 0}
        </span>
        <Menus>
          <Menus.Button id={id} />
          <Menus.List id={id}>
            <Menus.Item
              icon={<HiOutlineTrash size={30} />}
              label="Delete"
              onClick={() => {
                deletePizzaMutation(id);
              }}
            />
            <Menus.Item
              icon={<HiOutlineInformationCircle size={30} />}
              label="More Info"
              to={`/menu/${id}`}
            />
          </Menus.List>
        </Menus>
      </div>
    </div>
  );
}

export default PizzaItem;
