import { createPortal } from "react-dom";
import { ReactNode } from "react";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Overlay = styled.div`
  background: transparent;
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.5s;
  animation-duration: 0.8s;
  animation-name: overlayAnimation;
  animation-fill-mode: forwards;

  @keyframes overlayAnimation {
    from {
      backdrop-filter: blur(0);
    }

    to {
      backdrop-filter: blur(2px);
    }
  }
`;

const StyledDiv = styled.div`
  background-color: var(--color-gray-50);
  transition: all 0.5s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 0;
  width: auto;
  max-width: 95%;
  transform: translate(-50%, -50%);
  animation: animateModal 0.2s ease-out;
  padding: 0;
  margin: 0;

  @keyframes animateModal {
    from {
      scale: 0;
    }

    to {
      scale: 1;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  color: var(--color-gray-800);

  font-size: 16px;

  @media (min-width: 640px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
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
      <StyledDiv ref={ref}>
        <ModalHeader>
          <Button onClick={onClose}>
            <HiXMark />
          </Button>
        </ModalHeader>
        {children}
      </StyledDiv>
    </Overlay>,
    document.body
  );
}
