import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

export type SidebarPositionType = "absolute" | "static";

const StyledDiv = styled.div.attrs<{
  $sidebar: boolean;
  $sidebarPosition: SidebarPositionType;
}>((props) => ({
  $sidebar: props.$sidebar,
  $sidebarPosition: props.$sidebarPosition,
}))`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$sidebarPosition === "static" && props.$sidebar === true
      ? "300px 1fr"
      : props.$sidebarPosition === "static" && props.$sidebar === false
      ? "1fr"
      : props.$sidebarPosition === "absolute"
      ? "1fr"
      : ""};
  grid-gap: 0;
  height: 100vh;
  overflow-y: hidden;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  padding: 0;
  overflow-y: scroll;
`;

function Layout() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  const [sidebarPosition, setSidebarPosition] =
    useState<SidebarPositionType>("static");

  const isLgWindow = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (!isLgWindow) {
      setSidebarIsOpen(false);
      setSidebarPosition("absolute");
    } else {
      setSidebarIsOpen(true);
      setSidebarPosition("static");
    }
  }, [isLgWindow]);

  return (
    <StyledDiv $sidebarPosition={sidebarPosition} $sidebar={sidebarIsOpen}>
      <Sidebar
        onClose={() => {
          setSidebarIsOpen(false);
        }}
        sidebarPosition={sidebarPosition}
        sidebar={sidebarIsOpen}
      />
      <Container>
        <Header
          onToggleSidebar={() => {
            setSidebarIsOpen((s) => !s);
          }}
          sidebar={sidebarIsOpen}
          sidebarPosition={sidebarPosition}
        />
        <Main />
      </Container>
    </StyledDiv>
  );
}

export default Layout;
