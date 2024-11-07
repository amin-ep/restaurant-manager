import SidebarListItem from "./SidebarListItem";
import styles from "./SidebarList.module.css";
import { HiOutlineHome } from "react-icons/hi2";
import { PiForkKnife } from "react-icons/pi";
import { BsFileText } from "react-icons/bs";
function SidebarList() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <SidebarListItem icon={<HiOutlineHome size={26} />} to="/">
          Home
        </SidebarListItem>
        <SidebarListItem icon={<PiForkKnife size={26} />} to="menu">
          Menu
        </SidebarListItem>
        <SidebarListItem icon={<BsFileText size={26} />} to="orders">
          Orders
        </SidebarListItem>
      </ul>
    </nav>
  );
}

export default SidebarList;
