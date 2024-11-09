import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderApi";
import { AxiosResponse } from "axios";
import { OrderResponseData } from "../types/OrderTypes";
import OrderCartList from "../components/orderCartList/OrderCartList";

function Order() {
  const { id } = useParams();
  const { data: order } = useQuery<AxiosResponse<OrderResponseData>>({
    queryKey: ["order"],
    queryFn: () => getOrderById(id!),
  });

  return (
    <div>
      <OrderCartList items={order?.data.data.doc.cart.cartItems} />
    </div>
  );
}

export default Order;
