import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderApi";
import { AxiosResponse } from "axios";
import { OrderResponseData } from "../types/OrderTypes";

function Order() {
  const { id } = useParams();
  const { data: order, isLoading } = useQuery<AxiosResponse<OrderResponseData>>(
    {
      queryKey: ["order"],
      queryFn: () => getOrderById(id!),
    }
  );

  return <div></div>;
}

export default Order;
