import { Tooltip } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

function NavItem({
  children,
  title,
  position,
  onClick,
  to,
}: {
  children: ReactNode;
  title: string;
  position: "static" | "fixed";
  onClick?: () => void;
  to?: string;
}) {
  if (onClick)
    return (
      <Tooltip title={title} arrow>
        <li>
          <button
            className={`${
              position === "fixed" && "text-pantone hover:text-dark-pantone"
            } hover:text-pantone hover:scale-125 transition-all duration-300 w-7 h-7 rounded-full flex items-center justify-center`}
            onClick={onClick}
          >
            {children}
          </button>
        </li>
      </Tooltip>
    );

  if (to)
    return (
      <Tooltip title={title} arrow>
        <li
          className={`${
            position === "fixed" && "text-pantone hover:text-dark-pantone"
          } hover:text-pantone hover:scale-125 transition-all duration-300 w-7 h-7 rounded-full`}
        >
          <NavLink
            className={`${
              position === "fixed" && "text-pantone hover:text-dark-pantone"
            } hover:text-pantone hover:scale-125 transition-all duration-300 w-7 h-7 rounded-full`}
            to={to}
          >
            {children}
          </NavLink>
        </li>
      </Tooltip>
    );
}

export default NavItem;
