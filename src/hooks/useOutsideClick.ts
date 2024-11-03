import { useRef, useEffect } from "react";

export function useOutsideClick(close: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref && !ref.current?.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  return ref;
}
