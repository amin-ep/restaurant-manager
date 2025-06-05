import { HiStar } from "react-icons/hi2";
import styled from "styled-components";
import { usePizza } from "../../hooks/usePizza";
import { FILE_URL } from "../../utils/constants";
import {
  calculateDiscountPercentage,
  formateRatingsAverage,
} from "../../utils/helpers";
import Filter from "../ui/Filter";
import MainHeading from "../ui/MainHeading";
import Pagination from "../ui/Pagination";
import Spinner from "../ui/Spinner";
import Table from "../ui/Table";
import TableMenus from "./TableMenus";

const Img = styled.img`
  width: 100%;
  height: 45px;
  border-radius: 6px;
  object-fit: cover;
`;

const StyledSpan = styled.span`
  background: var(--color-emerald-500);
  padding: 8px;
  border-radius: 999px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

function MenuTable() {
  const { pizzaData, isLoadingPizzas } = usePizza();

  return (
    <div>
      <MainHeading breakPoint={476} label="Menu">
        <Filter
          filter="discount"
          options={[
            { label: "all", value: "all" },
            { label: "With Discount", value: "with-discount" },
            { label: "No Discount", value: "no-discount" },
          ]}
          breakPoint={476}
        />
      </MainHeading>

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
                  {formateRatingsAverage(pizza?.ratingsAverage as number) ??
                    "0"}
                </Table.BodyCell>
                <Table.BodyCell>
                  <TableMenus pizzaName={pizza.name} pizzaId={pizza._id} />
                </Table.BodyCell>
              </Table.Body>
            ))}
          </>
        )}
      </Table>
      {pizzaData && (
        <Pagination
          count={pizzaData.data.dataNum}
          totalPages={pizzaData?.data.totalPages}
        />
      )}
    </div>
  );
}

export default MenuTable;
