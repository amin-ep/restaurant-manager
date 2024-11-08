import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useFilter(filter: string) {
  const [queryString, setQueryString] = useState<string>("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const paramsValue = searchParams.get(filter) || "";
    setQueryString(paramsValue!);
  }, [searchParams, filter]);

  return queryString;
}
