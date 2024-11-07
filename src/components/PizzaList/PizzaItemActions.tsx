import { HiOutlineTrash, HiOutlineInformationCircle } from "react-icons/hi2";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { usePizza } from "../../hooks/usePizza";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 100px;
  background: var(--color-gray-0);
  width: 160px;
  z-index: 20;
  right: 20px;
  top: 45px;
  border: 2px solid var(--color-gray-2);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const LinkButtonBasicStyles = css`
  background: transparent;
  color: var(--color-gray-9);
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-decoration: none;

  & > span {
    font-size: 15px;
    text-align: left;
    width: 100%;
  }
  &:hover {
    background: var(--color-gray-2);
  }
`;

const StyledButton = styled.button`
  ${LinkButtonBasicStyles}
  border-radius: 6px 6px 0 0;
`;
const StyledLink = styled(Link)`
  ${LinkButtonBasicStyles}
  border-radius: 0 0 6px 6px;
`;

function PizzaItemActions({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const ref = useOutsideClick(onClose);

  const { deletePizzaMutation, isDeleting } = usePizza();
  return (
    <StyledDiv ref={ref}>
      <StyledButton
        onClick={() => {
          deletePizzaMutation(id);
        }}
      >
        <HiOutlineTrash size={30} />
        <span>Delete</span>
      </StyledButton>
      <StyledLink to={`/menu/${id}`}>
        <HiOutlineInformationCircle size={30} />
        <span>More Info</span>
      </StyledLink>
    </StyledDiv>
  );
}

export default PizzaItemActions;
