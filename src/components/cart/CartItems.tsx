import { useCart } from "@/hooks/useCart";
import styles from "./CartItems.module.css";
import MainHeading from "@/ui/MainHeading";
import { HiMiniPlus, HiMiniMinus, HiOutlineTrash } from "react-icons/hi2";

function CartItems() {
  const { data, cartError, cartIsLoading } = useCart();
  const cartItems = data?.data.cart.cartItems;

  return (
    <div className={styles["cart-item-wrapper"]}>
      {cartItems?.map((item) => (
        <div
          className={`p-3 border-[1.5px] border-gray-200 rounded-md ${styles["cart-item"]}`}
        >
          <img
            className="rounded-sm w-full h-full object-cover object-center"
            src={item.item.imageUrl}
            alt={item.item.name}
          />
          <div className={styles["cart-item-details"]}>
            <MainHeading extraStyles="text-lg" level={3}>
              {item.item.name}
            </MainHeading>
            <p>{item.item.ingredients.join(", ")}</p>
          </div>
          <div className="grid grid-cols-[auto_auto] items-center justify-between w-full">
            <span className="text-navy font-semibold">
              $ {item.quantity * item.item.unitPrice}
            </span>
            <div className="flex items-center gap-3 border-gray-200 border-2 rounded-md p-1 w-min">
              <button className="w-8 h-8 bg-transparent text-navy rounded-md flex items-center justify-center">
                {item.quantity > 1 ? (
                  <HiMiniMinus size={20} />
                ) : (
                  <HiOutlineTrash size={20} />
                )}
              </button>
              <span className="font-semibold text-navy">{item.quantity}</span>

              <button className="w-8 h-8 bg-transparent text-navy rounded-md flex items-center justify-center">
                <HiMiniPlus size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
