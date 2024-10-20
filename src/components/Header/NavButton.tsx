import { Tooltip } from "@mui/material";
import { ReactNode } from "react";

function NavButton({
  children,
  title,
  position,
}: {
  children: ReactNode;
  title: string;
  position: "static" | "fixed";
}) {
  return (
    <Tooltip title={title} arrow>
      <button
        className={`${
          position === "fixed" && "text-pantone hover:text-dark-pantone"
        } hover:text-pantone hover:scale-125 transition-all duration-300 w-7 h-7 rounded-full`}
      >
        {children}
      </button>
    </Tooltip>
  );
}

export default NavButton;
