import { useCallback, useEffect, useRef, useState } from "react";

export function useTimeout(callback, delayMs, enabled) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef(null);
  const [isScheduled, setIsScheduled] = useState(enabled);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isScheduled) {
      return undefined;
    }

    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;
      setIsScheduled(false);
      callbackRef.current();
    }, delayMs);
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [delayMs, isScheduled]);

  const start = useCallback(() => setIsScheduled(true), []);
  const cancel = useCallback(() => setIsScheduled(false), []);

  return { start, cancel, isScheduled };
}
