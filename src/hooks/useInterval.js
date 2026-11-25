import { useCallback, useEffect, useRef, useState } from "react";

export function useInterval(callback, intervalMs, enabled) {
  const callbackRef = useRef(callback);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(enabled);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    intervalRef.current = window.setInterval(() => {
      callbackRef.current();
    }, intervalMs);
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [intervalMs, isRunning]);

  const start = useCallback(() => setIsRunning(true), []);
  const stop = useCallback(() => setIsRunning(false), []);

  return { start, stop, isRunning };
}