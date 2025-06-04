import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styled from "styled-components";
import StatHeading from "./StatHeading";

const Container = styled.div`
  grid-area: deliveryTime;
`;

const TimeContainer = styled.div`
  border-bottom: 1px solid var(--color-gray-200);

  padding: 0.5rem 0;

  @media (min-width: 640px) {
    padding: 0.75rem 0;
  }

  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`;

function DeliveryTime() {
  return (
    <Container>
      <StatHeading>Delivery Time</StatHeading>
      <TimeContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopTimePicker />
        </LocalizationProvider>
      </TimeContainer>
    </Container>
  );
}

export default DeliveryTime;
