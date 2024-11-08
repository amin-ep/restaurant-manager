import Table from "../../ui/Table";
import OrderTableBody from "./OrderTableBody";
import OrderTableHeader from "./OrderTableHeader";

function OrderTable() {
  return (
    <Table columns="130px 180px 200px 140px 120px 80px">
      <OrderTableHeader />
      <OrderTableBody />
    </Table>
  );
}

export default OrderTable;
