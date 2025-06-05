import { useEffect } from "react";

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    if (document) {
      document.title = title;
    }
  }, [title]);
}
