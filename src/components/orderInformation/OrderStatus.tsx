import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import StatHeading from "./StatHeading";
import { OrderStatus as StatusTypes } from "../../types/OrderTypes";

const Container = styled.div`
  grid-area: orderStatus;
`;

const ButtonContainer = styled.div`
  border-bottom: 1px solid var(--color-gray-200);
  padding: 0.5rem 0;
  color: var(--color-gray-800);

  @media (min-width: 640px) {
    padding: 0.75rem 0;
  }

  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`;

const Button = styled.button<{ status: StatusTypes }>`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  width: 100%;

  background: ${(props) => "var(--color-status-" + props.status + ")"};

  border-radius: 12px;

  & > span {
    background: ${(props) => "var(--color-status-" + props.status + ")"};
    padding: 0.5rem;
    border-radius: 12px;
  }

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    background: transparent;

    & > span:nth-child(1) {
      padding: 0.75rem 1.25rem;
    }

    & > span:nth-child(2) {
      background: transparent;
    }
  }
`;

function OrderStatus({ status }: { status: StatusTypes }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const onMouseEnter = () => {
    if (status !== "waiting") {
      setOpenDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (status !== "waiting") {
      setOpenDropdown(false);
    }
  };

  return (
    <Container>
      <StatHeading>Status</StatHeading>
      <ButtonContainer>
        <Button
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          type="button"
          status={status}
        >
          <span>{status}</span>
          {status !== "waiting" && (
            <span
              style={{
                transform: openDropdown ? "rotate(180deg)" : "",
                transition: "0.3s all",
              }}
            >
              <SlArrowDown />
            </span>
          )}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default OrderStatus;
