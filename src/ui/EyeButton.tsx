import styled from "styled-components";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const StyledButton = styled.button`
  position: absolute;
  right: 0.25rem;
  top: calc(0.75rem / 4);
  height: min-content;
  background-color: transparent;
  border: none;
  color: var(--color-gray-8);
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  aspect-ratio: 1 /1;

  &:hover {
    background-color: #00000037;
  }
`;

function EyeButton({
  handleClick,
  isShown,
}: {
  handleClick: () => void;
  isShown: boolean;
}) {
  return (
    <StyledButton type="button" onClick={handleClick}>
      {isShown ? <HiOutlineEyeSlash size={25} /> : <HiOutlineEye size={25} />}
    </StyledButton>
  );
}

export default EyeButton;
