import styled, { css } from "styled-components";
import { SidebarPositionType } from "../../layout/Layout";
import SidebarHeading from "./SidebarHeading";
import SidebarList from "./SidebarList";

interface Props {
  sidebar: "false" | "true";
  sidebarPosition: SidebarPositionType;
}

const AsideShadowStyle = css`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Aside = styled.aside<Props>`
  background-color: var(--color-gray-50);
  position: ${(props) =>
    props.sidebarPosition === "absolute" ? "absolute" : "static"};
  display: ${(props) => (props.sidebar === "true" ? "grid" : "none")};
  width: 300px;
  max-width: 100%;
  transition: 0.5s all;

  z-index: 50;
  bottom: ${(props) =>
    props.sidebarPosition === "absolute" && props.sidebar === "true"
      ? "0"
      : "none"};
  top: ${(props) =>
    props.sidebarPosition === "absolute" && props.sidebar === "true"
      ? "0"
      : "none"};
  grid-template-columns: auto;
  grid-template-rows: 200px 1fr;

  ${(props) => props.sidebarPosition === "absolute" && AsideShadowStyle}
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
    <Aside
      sidebarPosition={sidebarPosition}
      sidebar={sidebar ? "true" : "false"}
    >
      <SidebarHeading onClose={onClose} />
      <SidebarList />
    </Aside>
  );
}

export default Sidebar;
