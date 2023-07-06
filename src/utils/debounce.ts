import { useRef } from 'react';

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  const timerId = useRef<ReturnType<typeof setTimeout>>();

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      result = fn(...args);
    }, delay);

    return result;
  };
}
