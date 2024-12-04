import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

export default function ResponsiveTimePickers({
  setTime,
}: {
  setTime: (hour: string, minutes: string) => void;
}) {
  const currentTime = new Date();

  const handleTimeChange = (newTime: Dayjs | null) => {
    setTime(newTime!.hour().toString(), newTime!.minute().toString());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker
        defaultValue={dayjs(
          `${currentTime.getFullYear()}-${
            currentTime.getMonth() + 1
          }-${currentTime.getDate()}T${currentTime.getHours()}:${currentTime.getMinutes()}`
        )}
        sx={{
          width: "320px",
          maxWidth: "100%",
          background: "var(--color-gray-1)",
          borderRadius: "6px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gridColumn: 2,
          "& .MuiTypography-root": {
            color: "var(--color-gray-9)",
          },
          "& .MuiClock-squareMask": {
            background: "var(--color-gray-2)",
          },
          "& .MuiClock-pin": {
            background: "var(--color-green-1)",
          },
          "& .MuiClockPointer-root": {
            background: "var(--color-green-1)",
          },
          "& .MuiClockPointer-thumb": {
            background: "var(--color-green-1)",
          },
          "& .MuiButtonBase-root": {
            color: "var(--color-gray-9)",
          },
          "& .MuiClockNumber-root": {
            outline: "none",
            color: "var(--color-gray-9)",
          },
          "& .MuiClockNumber-root.Mui-selected": {
            background: "var(--color-green-1)",
          },
        }}
        onChange={handleTimeChange}
      />
    </LocalizationProvider>
  );
}
