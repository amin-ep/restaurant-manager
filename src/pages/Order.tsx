import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderApi";
import { AxiosResponse } from "axios";
import { OrderResponseData } from "../types/OrderTypes";
import OrderCartList from "../components/orderCartList/OrderCartList";
import Spinner from "../ui/Spinner";
import OrderInformation from "../components/OrderInformation/OrderInformation";

function Order() {
  const { id } = useParams();
  const { data: order, isLoading } = useQuery<AxiosResponse<OrderResponseData>>(
    {
      queryKey: ["order"],
      queryFn: () => getOrderById(id!),
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
