import styled from "styled-components";

const AccountControl = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export default AccountControl;
