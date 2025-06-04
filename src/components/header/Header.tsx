import styled from "styled-components";
import HeaderList from "./HeaderList";
import { SidebarPositionType } from "../../layout/Layout";

const StyledHeader = styled.header<{
  sidebar: "true" | "false";
  sidebarPosition: SidebarPositionType;
}>`
  background: var(--color-gray-50);
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  grid-template-rows: 70px;
  gap: 0.5rem;
  padding-inline: 1rem;

  position: fixed;
  left: 0;
  z-index: 10;

  @media (min-width: 1024px) {
    left: ${(props) => (props.sidebar === "false" ? "0" : "300px")};
  }
`;

function Header({
  sidebar,
  onToggleSidebar,
  sidebarPosition,
}: {
  sidebar: boolean;
  onToggleSidebar: () => void;
  sidebarPosition: SidebarPositionType;
}) {
  return (
    <StyledHeader
      sidebarPosition={sidebarPosition}
      sidebar={sidebar === true ? "true" : "false"}
    >
      <HeaderList onToggleSidebar={onToggleSidebar} />
    </StyledHeader>
  );
}

export default Header;
