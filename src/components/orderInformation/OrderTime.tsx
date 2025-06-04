import moment from "moment";
import styled from "styled-components";
import StatHeading from "./StatHeading";

type Props = { time: Date };
const Container = styled.div`
  grid-area: orderTime;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledTime = styled.time`
  font-size: 12px;
  color: var(--color-gray-800);

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export default function OrderTime({ time }: Props) {
  return (
    <Container>
      <StatHeading>Ordered At</StatHeading>
      <StyledTime>{moment(time, "YYYYMMDD").fromNow()}</StyledTime>
    </Container>
  );
}
