import { createPortal } from "react-dom";
import { ReactNode } from "react";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Overlay = styled.div`
  background: transparent;
  backdrop-filter: blur(10px);
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.5s;
  animation-duration: 0.8s;
  animation-name: overlayAnimation;

  @keyframes overlayAnimation {
    from {
      backdrop-filter: blur(0);
    }

    to {
      backdrop-filter: blur(10px);
    }
  }
`;

const StyledModal = styled.div`
  background-color: var(--color-gray-0);
  transition: all 0.5s;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 0;
  width: auto;
  max-width: 100%;
  padding: 1rem;
  animation: animateModal 0.5s;

  @keyframes animateModal {
    from {
      transform: translate(-300%, -50%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  color: var(--color-gray-8);
`;

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  const ref = useOutsideClick(onClose);
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <ModalHeader>
          <Button onClick={onClose}>
            <HiXMark size={30} />
          </Button>
        </ModalHeader>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}
