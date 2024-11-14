import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderApi";
import { AxiosResponse } from "axios";
import { OrderResponseData } from "../types/OrderTypes";
import OrderCartList from "../components/orderCartList/OrderCartList";
import Spinner from "../ui/Spinner";
import OrderInformation from "../components/orderInformation/OrderInformation";
import { useEffect } from "react";

function Order() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  useEffect(() => {
    queryClient.removeQueries({
      queryKey: ["order"],
    });
  }, [queryClient]);

  const { data: order, isLoading } = useQuery<AxiosResponse<OrderResponseData>>(
    {
      queryFn: () => getOrderById(id ?? ""),
      queryKey: ["order"],
      initialData() {},
    }
  );

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <OrderCartList items={order?.data.data.doc.cart.cartItems} />
          <OrderInformation order={order?.data.data.doc} />
        </>
      )}
    </div>
  );
}

export default Order;
