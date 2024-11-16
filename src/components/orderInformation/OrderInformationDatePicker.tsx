import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";

function OrderInformationDatePicker({
  setDate,
}: {
  setDate: (year: string, month: string, day: string) => void;
}) {
  const currentTime = new Date();

  const handleChangeDate = (newDate: Dayjs | null) => {
    setDate(
      newDate!.year().toString(),
      newDate!.month().toString(),
      newDate!.date().toString()
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        defaultValue={dayjs(
          `${currentTime.getFullYear()}-${
            currentTime.getMonth() + 1
          }-${currentTime.getDate()}`
        )}
        sx={{
          background: "var(--color-gray-1)",
          borderRadius: "6px",

          "& .MuiButtonBase-root": {
            background: "transparent",
            color: "var(--color-gray-9)",
          },
          "& .MuiButtonBase-root:hover": {
            background: "var(--color-lime)",
          },
          "& .MuiButtonBase-root.Mui-selected": {
            background: "var(--color-green-1)",
          },
          "& .MuiButtonBase-root.Mui-selected:focus": {
            background: "var(--color-green-1)",
          },
          "& .Mui-selected:hover": {
            background: "var(--color-green-2)",
          },
          "& .Mui-selected:focus": {
            background: "var(--color-green-1)",
          },
          "& .MuiPickersCalendarHeader-label": {
            color: "var(--color-gray-9)",
          },
          "& .MuiTypography-root": {
            color: "var(--color-gray-9)",
          },
          "& .MuiPickersYear-yearButton": {
            color: "var(--color-gray-9)",
          },
          "& .MuiPickersYear-yearButton.Mui-selected": {
            background: "var(--color-green-1)",
          },
          "& .MuiPickersDay-today": {
            color: "var(--color-gray-9)",
            border: "1px solid var(--color-gray-9)",
          },
        }}
        onChange={handleChangeDate}
      />
    </LocalizationProvider>
  );
}

export default OrderInformationDatePicker;
