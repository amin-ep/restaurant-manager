import styled from "styled-components";
import { OrderCartItem } from "../../types/OrderTypes";
import { FILE_URL } from "../../utils/constants";
import { calculateDiscountPercentage } from "../../utils/helpers";
import styles from "./CartItems.module.css";
import StatHeading from "./StatHeading";

type Props = { items: OrderCartItem[]; totalPrice: number };

const Container = styled.div`
  grid-area: cartItems;
`;

const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  gap: 0.75rem;

  overflow-y: auto;
  max-height: 310px;

  @media (min-width: 640px) {
    max-height: 340px;
  }

  @media (min-width: 768px) {
    max-height: 415px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 8px;
  width: 80px;

  @media (min-width: 768px) {
    width: 90px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 0.5rem;
`;

const StyledLi = styled.li`
  list-style-type: none;

  border-bottom: 1px solid var(--color-gray-200);
  padding: 0.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 640px) {
    padding: 0.75rem 0;
    gap: 0.75rem;
  }
  @media (min-width: 768px) {
    padding: 1rem 0;
    gap: 1rem;
  }
`;

const Price = styled.p`
  font-size: 12px;

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

function CartItems({ items, totalPrice }: Props) {
  return (
    <Container>
      <Header>
        <StatHeading>Cart Items</StatHeading>
        <Price>${totalPrice}</Price>
      </Header>
      <Menu>
        {items.map((item) => (
          <StyledLi key={item._id}>
            <StyledDiv>
              <Image
                src={`${FILE_URL}/${item.pizza.imageUrl}`}
                alt={item.pizza.name}
              />
              <div className={styles.stats}>
                <div className={styles.nameWrapper}>
                  <h4 className={styles.name}>{item.pizza.name}</h4>
                  <span className={styles.quantity}>x{item.quantity}</span>
                </div>
                <p className={styles.ingredients}>
                  {item.pizza.ingredients.join(", ")}
                </p>
              </div>
            </StyledDiv>
            <div className={styles.priceDetails}>
              <PriceDetail
                title="Unit Price"
                value={`$${item.pizza.unitPrice}`}
              />
              <PriceDetail
                title="Discount"
                value={calculateDiscountPercentage(
                  item.pizza.unitPrice,
                  item.pizza.discount
                )}
              />
              <PriceDetail
                title="Final Price"
                value={`$${item.pizza.finalPrice}`}
              />
            </div>
          </StyledLi>
        ))}
      </Menu>
    </Container>
  );
}

function PriceDetail({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className={styles.priceDetailCol}>
      <span className={styles.priceDetailTitle}>{title}</span>
      <p className={styles.priceDetailValue}>{value}</p>
    </div>
  );
}

export default CartItems;
