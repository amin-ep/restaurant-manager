import styled from "styled-components";
import HeaderList from "./HeaderList";
import { SidebarPositionType } from "../../layout/Layout";

const StyledHeader = styled.header.attrs<{
  $sidebar: boolean;
  $sidebarPosition: SidebarPositionType;
}>((props) => ({
  $sidebar: props.$sidebar,
  $sidebarPosition: props.$sidebarPosition,
}))`
  background: transparent;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  grid-template-rows: 70px;
  gap: 0.5rem;
  padding-inline: 1rem;
  transition: all 0.5s;
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
    <StyledHeader $sidebarPosition={sidebarPosition} $sidebar={sidebar}>
      <HeaderList onToggleSidebar={onToggleSidebar} />
    </StyledHeader>
  );
}

export default Header;
