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
  background-color: var(--color-white);
  border-right: 1px solid var(--color-stone-200);
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
  transition: 0.5s all;
  grid-template-columns: auto;
  grid-template-rows: 200px 1fr;
`;

function Sidebar({
  sidebar,
  sidebarPosition,
}: {
  sidebar: boolean;
  sidebarPosition: SidebarPositionType;
}) {
  return (
    <Aside $sidebarPosition={sidebarPosition} $sidebar={sidebar}>
      <SidebarHeading />
      <SidebarList />
    </Aside>
  );
}

export default Sidebar;
