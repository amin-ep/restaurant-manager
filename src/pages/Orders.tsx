import MainHeading from "../ui/MainHeading";
import OrderTable from "../components/orderTable/OrderTable";
import Filter from "../ui/Filter";

export default function Orders() {
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
    </>
  );
}
