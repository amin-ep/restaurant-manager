import styled from "styled-components";
const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  & > h1 {
    font-size: 22px;
    color: var(--color-gray-700);
    text-shadow: 3px 3px var(--color-gray-100);
  }

  @media (min-width: 640px) {
    gap: 0.5rem;

    & > h1 {
      font-size: 24px;
    }
  }
  @media (min-width: 768px) {
    gap: 0.75rem;

    & > h1 {
      font-size: 26px;
    }
  }
  @media (min-width: 1280px) {
    gap: 1rem;

    & > h1 {
      font-size: 28px;
    }
  }
`;

const Image = styled.img`
  width: 80px;
  aspect-ratio: 1/1;

  @media (min-width: 640px) {
    width: 90px;
  }
  @media (min-width: 768px) {
    width: 100px;
  }

  @media (min-width: 1280px) {
    width: 110px;
  }
`;

export default function LoginHeader() {
  return (
    <Header>
      <Image src="/images/orange-lock.png" alt="lock" />
      <h1>Login</h1>
    </Header>
  );
}
