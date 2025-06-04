import styled from "styled-components";
import LinkButton from "./LinkButton";
import Loading from "./Loading";
import Modal from "./Modal";

type Props = {
  message: string;
  heading: string;
  close: () => void;
  action: () => void;
  actionTextContent: string;
  isActionPending?: boolean;
};

const Container = styled.div`
  text-align: center;
  width: 25rem;
  max-width: 100%;
  padding: 0.25rem;

  @media (min-width: 640px) {
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 1.25rem;
  }

  @media (min-width: 1280px) {
    padding: 1.5rem;
  }
`;

const Heading = styled.h5`
  font-size: 16px;

  @media (min-width: 640px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;
const Message = styled.p`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 1.5rem 0;
  }
`;

function Alert({
  action,
  actionTextContent,
  close,
  heading,
  message,
  isActionPending,
}: Props) {
  return (
    <Modal onClose={close}>
      <Container>
        <Heading>{heading}</Heading>
        <Message>{message}</Message>
        <ActionsWrapper>
          <LinkButton onClick={close}>Cancel</LinkButton>
          <LinkButton disabled={isActionPending} onClick={action}>
            {isActionPending && <Loading />}
            {actionTextContent}
          </LinkButton>
        </ActionsWrapper>
      </Container>
    </Modal>
  );
}

export default Alert;
