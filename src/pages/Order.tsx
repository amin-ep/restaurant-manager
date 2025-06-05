import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import { getOrderById } from "../services/orderApi";
import { OrderResponseData } from "../types/OrderTypes";
import OrderHeader from "../components/orderHeader/OrderHeader";
import styled from "styled-components";
import OrderCustomer from "../components/orderCustomer/OrderCustomer";
import OrderInformation from "../components/orderInformation/OrderInformation";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Grid = styled.article`
  display: grid;
  grid-template-columns: auto;
  gap: 0.75rem;

  @media (min-width: 425px) {
    grid-template-columns: auto 1fr;
  }
`;

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

  useDocumentTitle(`${order?.data.data.document.customer.firstName}'s Order`);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        order && (
          <>
            <OrderHeader />
            <Grid>
              <OrderCustomer customer={order?.data.data.document.customer} />
              <OrderInformation order={order.data.data.document} />
            </Grid>
          </>
        )
      )}
    </div>
  );
}

export default Order;
