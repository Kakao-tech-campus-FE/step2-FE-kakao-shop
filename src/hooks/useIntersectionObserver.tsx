import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(targetRef: RefObject<Element>, options: IntersectionObserverInit, isLast: boolean) {
  const [isIntersecting, setIsIntersectiong] = useState<boolean>(false);

  useEffect(() => {
    const observer = isLast
      ? new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setIsIntersectiong(true);
          }
        }, options)
      : null;
    if (!isIntersecting && targetRef?.current && observer) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer?.disconnect();
    };
  }, [targetRef, options]);

  return isIntersecting;
}

export default useIntersectionObserver;
