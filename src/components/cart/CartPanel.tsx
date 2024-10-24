import { ReactNode } from "react";
import { TabValueType } from "./CartTab";
import { Box } from "@mui/material";

function CartPanel({
  children,
  value,
  label,
}: {
  children: ReactNode;
  value: TabValueType;
  label: TabValueType;
}) {
  return <div>{value === label && <Box>{children}</Box>}</div>;
}

export default CartPanel;
