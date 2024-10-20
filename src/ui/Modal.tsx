import { ReactNode } from "react";
import { createPortal } from "react-dom";

function Modal({ children }: { children: ReactNode }) {
  return createPortal(<div>{children}</div>, document.body);
}

export default Modal;
