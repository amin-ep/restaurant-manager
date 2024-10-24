import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent } from "react";
import { HiOutlineShoppingBag, HiOutlineReceiptRefund } from "react-icons/hi2";
import { TabValueType } from "./CartTab";
import { Dispatch, SetStateAction } from "react";
function CartTabHeader({
  value,
  setTabValue,
}: {
  value: TabValueType;
  setTabValue: Dispatch<SetStateAction<TabValueType>>;
}) {
  return (
    <Tabs
      value={value}
      onChange={(e: SyntheticEvent, newValue: TabValueType) => {
        setTabValue(newValue);
      }}
      TabIndicatorProps={{
        sx: {
          backgroundColor: "var(--color-navy)",
          height: "5px",
          borderRadius: "5px 5px 0 0",
        },
      }}
    >
      <Tab
        sx={{
          "&.Mui-selected": {
            color: "var(--color-navy)",
          },
        }}
        label={
          <span className="flex items-center gap-1 justify-center text-navy">
            Cart
            <HiOutlineShoppingBag size={22} />
          </span>
        }
        value="cart"
      />
      <Tab
        label={
          <span className="flex items-center gap-1 justify-center text-navy">
            Orders
            <HiOutlineReceiptRefund size={22} />
          </span>
        }
        value="orders"
      />
    </Tabs>
  );
}

export default CartTabHeader;
