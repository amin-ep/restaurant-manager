import Table from "../../ui/Table";
import { usePizza } from "../../hooks/usePizza";
import { FILE_URL } from "../../utils/constants";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import {
  HiOutlineTrash,
  HiOutlineInformationCircle,
  HiStar,
} from "react-icons/hi2";
import Pagination from "../../ui/Pagination";
import Filter from "../../ui/Filter";
import Spinner from "../../ui/Spinner";
import { calculateDiscountPercentage } from "../../utils/helpers";

const Img = styled.img`
  width: 100%;
  height: 45px;
  border-radius: 6px;
  object-fit: cover;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  background: var(--color-lime);
  padding: 8px;
  border-radius: 999px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MenuTable() {
  const { pizzaData, isLoadingPizzas, deletePizzaMutation } = usePizza();

  return (
    <div>
      <Row>
        <h1>Menu</h1>
        <Filter
          filter="discount"
          options={[
            { label: "all", value: "all" },
            { label: "With Discount", value: "with-discount" },
            { label: "No Discount", value: "no-discount" },
          ]}
        />
      </Row>

      <Table columns="110px 140px 120px 150px 150px 100px 80px">
        <Table.Header>
          <Table.HeadingCell></Table.HeadingCell>
          <Table.HeadingCell>Name</Table.HeadingCell>
          <Table.HeadingCell>Unit Price</Table.HeadingCell>
          <Table.HeadingCell>Final Price</Table.HeadingCell>
          <Table.HeadingCell>Discount Percentage</Table.HeadingCell>
          <Table.HeadingCell>Rate</Table.HeadingCell>
          <Table.HeadingCell></Table.HeadingCell>
        </Table.Header>
        {isLoadingPizzas ? (
          <Spinner />
        ) : (
          <>
            {pizzaData?.data.data.docs.map((pizza) => (
              <Table.Body key={pizza._id}>
                <Table.BodyCell>
                  <Img src={`${FILE_URL}/${pizza.imageUrl}`} alt={pizza.name} />
                </Table.BodyCell>
                <Table.BodyCell>{pizza.name}</Table.BodyCell>
                <Table.BodyCell>${pizza.unitPrice}</Table.BodyCell>
                <Table.BodyCell>${pizza.finalPrice}</Table.BodyCell>
                <Table.BodyCell>
                  <StyledSpan>
                    {calculateDiscountPercentage(
                      pizza.unitPrice,
                      pizza.discount
                    )}
                  </StyledSpan>
                </Table.BodyCell>
                <Table.BodyCell>
                  <HiStar color="yellow" size={25} />
                  {pizza.ratingsAverage ?? "0"}
                </Table.BodyCell>
                <Table.BodyCell>
                  <Menus>
                    <Menus.Button id={pizza._id} />
                    <Menus.List id={pizza._id}>
                      <Menus.Item
                        icon={<HiOutlineInformationCircle size={30} />}
                        label="More Info"
                        to={`/menu/${pizza._id}`}
                      />
                      <Menus.Item
                        icon={<HiOutlineTrash size={30} />}
                        label="Delete"
                        onClick={() => {
                          deletePizzaMutation(pizza._id);
                        }}
                      />
                    </Menus.List>
                  </Menus>
                </Table.BodyCell>
              </Table.Body>
            ))}
          </>
        )}
      </Table>
      {pizzaData && (
        <Pagination
          count={pizzaData.data.dataNum}
          totalPages={pizzaData.data.totalPages}
        />
      )}
    </div>
  );
}

export default MenuTable;
