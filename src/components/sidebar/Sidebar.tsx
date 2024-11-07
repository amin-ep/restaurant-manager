import styled from "styled-components";
import { SidebarPositionType } from "../../layout/Layout";
import SidebarHeading from "./SidebarHeading";
import SidebarList from "./SidebarList";

const Aside = styled.aside.attrs<{
  $sidebar: boolean;
  $sidebarPosition: SidebarPositionType;
}>((props) => ({
  $sidebar: props.$sidebar,
  $sidebarPosition: props.$sidebarPosition,
}))`
  background-color: var(--color-gray-0);
  position: ${(props) =>
    props.$sidebarPosition === "absolute" ? "absolute" : "static"};
  display: ${(props) => (props.$sidebar === true ? "grid" : "none")};
  width: 300px;
  max-width: 100%;

  z-index: 1000;
  bottom: ${(props) =>
    props.$sidebarPosition === "absolute" && props.$sidebar === true
      ? "0"
      : "none"};
  top: ${(props) =>
    props.$sidebarPosition === "absolute" && props.$sidebar === true
      ? "0"
      : "none"};
  grid-template-columns: auto;
  grid-template-rows: 200px 1fr;
`;

function Sidebar({
  sidebar,
  sidebarPosition,
  onClose,
}: {
  sidebar: boolean;
  sidebarPosition: SidebarPositionType;
  onClose: () => void;
}) {
  return (
    <Aside $sidebarPosition={sidebarPosition} $sidebar={sidebar}>
      <SidebarHeading onClose={onClose} />
      <SidebarList />
    </Aside>
  );
}

export default Sidebar;
