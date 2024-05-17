import { useRef } from "react";

export function useThrottle<T>(callback: (value: T) => void, limit: number) {
  const lastRun = useRef(Date.now());

  return function (value: T) {
    if (Date.now() - lastRun.current >= limit) {
      callback(value);
      lastRun.current = Date.now();
    }
  };
}
