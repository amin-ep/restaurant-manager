import { IPizza } from "../../types/PizzaTypes";
import { FILE_URL } from "../../utils/helpers";
import styles from "./PizzaItem.module.css";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import PizzaItemActions from "./PizzaItemActions";
import IconButtonLink from "../../ui/IconButtonLink";
import { useState } from "react";

function PizzaItem({ pizza, number }: { pizza: IPizza; number: number }) {
  const [openActions, setOpenActions] = useState<boolean>(false);
  const { discount, finalPrice, imageUrl, inventory, name, unitPrice, _id } =
    pizza;

  return (
    <div className={styles.item}>
      <div className={styles["item-col-1"]}>
        <span className={styles["item-number"]}>#{number}</span>
        <img src={`${FILE_URL}/${imageUrl}`} alt={name} />
        <div className={styles["item-details"]}>
          <p>{name}</p>
          <p>
            {discount > 1 ? (
              <>
                <span>{unitPrice}</span> <span>{finalPrice}</span>
              </>
            ) : (
              <span>{finalPrice}</span>
            )}
          </p>
        </div>
      </div>
      <div className={styles["item-col-2"]}>
        <span>{inventory}</span>
        <IconButtonLink
          onClick={() => {
            setOpenActions((open) => !open);
          }}
        >
          <HiOutlineEllipsisVertical size={26} />
        </IconButtonLink>
        {openActions && (
          <PizzaItemActions
            onClose={() => {
              setOpenActions(false);
            }}
            id={_id}
          />
        )}
      </div>
    </div>
  );
}

export default PizzaItem;
