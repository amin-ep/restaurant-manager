import Table from "../ui/Table";

function OrderTableHeader() {
  return (
    <Table.Header>
      <Table.HeadingCell></Table.HeadingCell>
      <Table.HeadingCell>Customer Name</Table.HeadingCell>
      <Table.HeadingCell>Order Time</Table.HeadingCell>
      <Table.HeadingCell>Phone number</Table.HeadingCell>
      <Table.HeadingCell>status</Table.HeadingCell>
      <Table.HeadingCell></Table.HeadingCell>
    </Table.Header>
  );
}

export default OrderTableHeader;
