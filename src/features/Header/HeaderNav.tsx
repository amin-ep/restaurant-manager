import {
  HiOutlineShoppingBag,
  HiOutlineArrowRightOnRectangle,
  HiOutlineLockOpen,
  HiOutlineHome,
} from "react-icons/hi2";
import { GiFullPizza } from "react-icons/gi";
import NavItem from "./NavItem";
import styles from "./HeaderNav.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function HeaderNav({ position }: { position: "static" | "fixed" }) {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    location.reload();
  };

  return (
    <nav
      className={`flex justify-around ${position} ${
        position === "fixed" &&
        `${styles["fixed-nav"]} text-pantone font-semibold`
      }`}
    >
      <Link
        to="/"
        className={`flex items-center gap-3 font-dancing-script text-3xl`}
      >
        <GiFullPizza size={40} />
        Pizza Passion
      </Link>
      <ul className="flex items-center gap-3">
        <NavItem to="/" title="Home" position={position}>
          <HiOutlineHome size={28} />
        </NavItem>
        {isLoggedIn ? (
          <>
            <NavItem to="cart" title="Cart" position={position}>
              <HiOutlineShoppingBag size={28} />
            </NavItem>
            <NavItem onClick={handleLogout} title="Logout" position={position}>
              <HiOutlineArrowRightOnRectangle size={28} />
            </NavItem>
          </>
        ) : (
          <>
            <NavItem to="auth" title="Authentication" position={position}>
              <HiOutlineLockOpen size={28} />
            </NavItem>{" "}
          </>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;
