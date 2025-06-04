import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled, { css } from "styled-components";

const DarkModeStyles = css`
  transform: translate(0, 0);
`;

const LightModeStyles = css`
  transform: translate(calc(40px + 0.5rem), 0);
`;

const StyledDiv = styled.div<{ mode: "dark" | "light" }>`
  background: var(--color-gray-0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  gap: 0.5rem;
  position: relative;
  border-radius: 6px;
  transition: 0.5s all;

  &::after {
    width: 40px;
    background-color: var(--color-emerald-500);
    position: absolute;
    transition: 0.5s all;
    top: 5px;
    bottom: 5px;
    left: 0.5rem;
    z-index: 20;
    content: "";
    border-radius: 6px;
    ${(props) => (props.mode === "dark" ? DarkModeStyles : LightModeStyles)}
  }

  & > span:nth-child(2) {
    color: ${(props) => props.mode === "light" && "#fff"};
  }
`;

const StyledButton = styled.span`
  width: 40px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-900);
  cursor: pointer;
  z-index: 30;
  background-color: transparent;
  outline: none;
  border: none;
`;

function HeaderDarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledDiv mode={isDarkMode ? "dark" : "light"}>
      <StyledButton onClick={toggleDarkMode}>
        <HiOutlineMoon size={27} />
      </StyledButton>
      <StyledButton onClick={toggleDarkMode}>
        <HiOutlineSun size={27} />
      </StyledButton>
    </StyledDiv>
  );
}

export default HeaderDarkModeButton;
