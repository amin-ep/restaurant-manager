import { useMediaQuery } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { acceptOrder } from "../../services/orderApi";
import { IOrder } from "../../types/OrderTypes";
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

function DeliveryTime({
  status,
  deliveryTime,
  orderId,
}: {
  status: IOrder["status"];
  deliveryTime: IOrder["deliveryTime"];
  orderId: string;
}) {
  const isSmWindow = useMediaQuery("(min-width:640px)");
  const isLgWindow = useMediaQuery("(min-width:1024px)");

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: (payload: Date) => acceptOrder(orderId, payload),
    mutationKey: ["order"],
    onSuccess: (data) => {
      console.log(data);
      queryClient
        .invalidateQueries({
          queryKey: ["order"],
        })
        .then(() => {
          toast.success("Order accepted successfully");
        });
    },
  });

  useEffect(() => {
    if (isLoading) {
      document.body.style.cursor = "progress";
    } else {
      document.body.style.cursor = "default";
    }
  }, [isLoading]);

  return (
    <Container>
      <StatHeading>Delivery Time</StatHeading>
      {status === "waiting" ? (
        <TimeContainer>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  variant: "outlined",
                  InputProps: {
                    sx: {
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "1px solid",
                      borderColor: "var(--color-gray-200)",
                      padding: "0.75rem 1rem",
                      color: "var(--color-gray-950)",
                      borderRadius: "6px",
                      fontSize: isLgWindow ? 16 : isSmWindow ? 14 : 12,
                      "&:hover": {
                        borderColor: "var(--color-gray-300)",
                      },
                      "&:focus": {
                        borderColor: "var(--color-gray-100)",
                        backgroundColor: "var(--color-emerald-50)",
                      },
                    },
                  },
                },
              }}
              onAccept={(event) => {
                if (event) {
                  const currentTime = new Date();
                  const selectedTime = currentTime;
                  selectedTime.setHours(event.hour());
                  selectedTime.setMinutes(event.minute());
                  if (currentTime.getHours() > selectedTime.getHours()) {
                    selectedTime.setDate(selectedTime.getDate() + 1);
                  }
                  mutate(selectedTime);
                }
              }}
              closeOnSelect={false}
              ampm={false}
            />
          </LocalizationProvider>
        </TimeContainer>
      ) : (
        <span>{deliveryTime?.toString()}</span>
      )}
    </Container>
  );
}

export default DeliveryTime;
