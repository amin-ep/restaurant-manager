import { Box } from "@mui/material";
import { useState } from "react";
import CartPanel from "./CartPanel";

import CartTabHeader from "./CartTabHeader";
import Orders from "../orders/Orders";
import CartItems from "./CartItems";
import MainHeading from "@/ui/MainHeading";

export type TabValueType = "cart" | "orders";

function CartTab() {
  const [tabValue, setTabValue] = useState<TabValueType>("cart");

  return (
    <Box sx={{ width: "100%", padding: "0.5rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CartTabHeader setTabValue={setTabValue} value={tabValue} />
      </Box>
      <MainHeading level={1} extraStyles="capitalize text-3xl my-4">
        {tabValue}
      </MainHeading>
      <CartPanel label="cart" value={tabValue}>
        <CartItems />
      </CartPanel>
      <CartPanel label="orders" value={tabValue}>
        <Orders />
      </CartPanel>
    </Box>
  );
}

export default CartTab;
