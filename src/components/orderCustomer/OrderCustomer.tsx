import styled from "styled-components";
import { OrderCustomer as Customer } from "../../types/CustomerTypes";

const Section = styled.section`
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  padding: 0.5rem;
  height: min-content;

  @media (min-width: 640px) {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1.75rem;
  }
`;

const Heading = styled.h3`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;
  gap: 0.25rem;
  margin-top: 0;

  color: var(--color-gray-900);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-weight: 800;
    gap: 0.5rem;
  }
`;

const Text = styled.p`
  font-size: 12px;
  color: var(--color-gray-800);

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

function OrderCustomer({ customer }: { customer: Customer }) {
  return (
    <Section>
      <Heading>
        <span>{customer.firstName}</span>
        <span>{customer.lastName}</span>
      </Heading>
      <Text>{customer.email}</Text>
      <Text>{customer.phone}</Text>
    </Section>
  );
}

export default OrderCustomer;
