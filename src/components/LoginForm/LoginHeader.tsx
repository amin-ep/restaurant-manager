import styled from "styled-components";
import { HiOutlineLockOpen } from "react-icons/hi2";
const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;

  & > h1 {
    font-size: 42px;
    color: var(--color-green-1);
    text-shadow: 3px 3px var(--color-gray-9);
  }
`;

const Span = styled.span`
  background-color: var(--color-green-1);
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-9);
  border-radius: 999px;
  outline: 2px solid var(--color-green-1);
  outline-offset: 2px;
`;

export default function LoginHeader() {
  return (
    <Header>
      <Span>
        <HiOutlineLockOpen size={65} />
      </Span>
      <h1>Login</h1>
    </Header>
  );
}
