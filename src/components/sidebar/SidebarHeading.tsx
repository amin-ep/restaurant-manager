import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  padding: 0.4rem 0;
  font-family: RubikWetPaint;
  position: relative;

  & > h1 {
    color: var(--color-emerald-500);
    font-size: 30px;
    text-transform: uppercase;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-gray-800);

  @media (min-width: 1024px) {
    display: none;
  }
`;

function SidebarLogo({ onClose }: { onClose: () => void }) {
  return (
    <StyledDiv>
      <StyledButton onClick={onClose}>
        <HiXMark size={28} />
      </StyledButton>
      <h1>Pizza Passion</h1>
    </StyledDiv>
  );
}

export default SidebarLogo;
