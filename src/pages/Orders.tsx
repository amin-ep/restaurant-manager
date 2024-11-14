import MainHeading from "../ui/MainHeading";
import OrderTable from "../components/orderTable/OrderTable";
import Filter from "../ui/Filter";
import { useOrder } from "../hooks/useOrder";
import Pagination from "../ui/Pagination";

export default function Orders() {
  const { orders } = useOrder();
  return (
    <>
      <MainHeading label="Orders">
        <Filter
          filter="status"
          options={[
            { label: "All", value: "all" },
            { label: "Waiting", value: "waiting" },
            { label: "Accepted", value: "accepted" },
            { label: "Posted", value: "posted" },
            { label: "Received", value: "received" },
          ]}
        />
      </MainHeading>
      <OrderTable />
      {orders && (
        <Pagination
          count={orders?.data.dataNum}
          totalPages={orders?.data.totalPages}
        />
      )}
    </>
  );
}
