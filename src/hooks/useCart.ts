import { CartResponseData } from "@/interfaces/ICart";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import CartApi from "@/services/cartApi";
import { useCallback } from "react";

export function useCart() {
  const { getMyCart } = new CartApi();
  const {
    data,
    error: cartError,
    isLoading: cartIsLoading,
    status: cartStatus,
  } = useQuery<AxiosResponse<CartResponseData>>({
    queryKey: ["cart"],
    queryFn: getMyCart,
  });

  const cartTotalQuantity = useCallback(() => {
    let totalQuantity: number;
    if (!cartError) {
      const cartItemsQuantityArr: number[] | undefined =
        data?.data?.cart.cartItems.map((item) => item.quantity);
      const sumItemsQuantityArr: number | undefined =
        cartItemsQuantityArr?.reduce((acc, cur) => acc + cur);
      if (typeof sumItemsQuantityArr === "number") {
        totalQuantity = sumItemsQuantityArr;
      } else {
        totalQuantity = 0;
      }
    } else {
      totalQuantity = 0;
    }

    return totalQuantity;
  }, [data, cartError]);

  // const cartTotalPrice = () => {
  //   let totalPrice: number;

  //   console.log(data?.data?.cart?.cartItems);
  // };

  return {
    data,
    cartError,
    cartStatus,
    cartIsLoading,
    // cartTotalPrice,
    cartTotalQuantity,
  };
}
