import { useRef, useEffect } from 'react';

function useThrottling(callback: () => void, ms: number) {
  let timer: React.MutableRefObject<ReturnType<typeof setTimeout> | null> = useRef(null);
  useEffect(() => {
    return () => {
      timer.current !== null && clearTimeout(timer.current);
    };
  }, []);
  return () => {
    if (!timer.current) {
      callback();
      timer.current = setTimeout(() => {
        timer.current = null;
      }, ms);
    }
  };
}

export default useThrottling;
