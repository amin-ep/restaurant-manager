import { BsFileText } from "react-icons/bs";
import { PiForkKnife } from "react-icons/pi";
import styles from "./SidebarList.module.css";
import SidebarListItem from "./SidebarListItem";
function SidebarList() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
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
