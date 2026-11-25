import { useEffect, useRef } from "react";

export function usePrevious(value) {
  const ref = useRef();
  const previousValue = ref.current; // eslint-disable-line react-hooks/refs

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return previousValue;
}
