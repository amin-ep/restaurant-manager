import {
  HiOutlineShoppingBag,
  HiOutlineArrowRightOnRectangle,
  HiOutlineLockOpen,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { GiFullPizza } from "react-icons/gi";
import NavButton from "./NavButton";
import styles from "./HeaderNav.module.css";

function HeaderNav({ position }: { position: "static" | "fixed" }) {
  return (
    <nav
      className={`flex justify-around ${position} ${
        position === "fixed" &&
        `${styles["fixed-nav"]} text-pantone font-semibold`
      }`}
    >
      <span className={`flex items-center gap-3 font-dancing-script text-3xl`}>
        <GiFullPizza size={40} />
        Pizza Passion
      </span>
      <div className="flex items-center gap-3">
        <NavButton title="Cart" position={position}>
          <HiOutlineShoppingBag size={28} />
        </NavButton>
        <NavButton title="Logout" position={position}>
          <HiOutlineArrowRightOnRectangle size={28} />
        </NavButton>
        <NavButton title="Signup" position={position}>
          <HiOutlineUserPlus size={28} />
        </NavButton>
        <NavButton title="Login" position={position}>
          <HiOutlineLockOpen size={28} />
        </NavButton>
      </div>
    </nav>
  );
}

export default HeaderNav;
