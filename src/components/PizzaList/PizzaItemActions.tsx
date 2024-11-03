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
  background: var(--color-white);
  width: 160px;
  z-index: 20;
  right: 20px;
  top: 45px;
  border: 2px solid var(--color-stone-200);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const LinkButtonBasicStyles = css`
  background: transparent;
  color: var(--color-stone-700);
  width: 100%;
  padding: 0.75rem 0.75rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;

  & > span {
    font-size: 15px;
  }
  &:hover {
    background: var(--color-stone-300);
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
        <HiOutlineTrash size={22} />
        <span>Delete</span>
      </StyledButton>
      <StyledLink to={`/pizza/${id}`}>
        <HiOutlineInformationCircle size={24} />
        <span>More Info</span>
      </StyledLink>
    </StyledDiv>
  );
}

export default PizzaItemActions;
