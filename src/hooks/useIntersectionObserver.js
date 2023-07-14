import { useRef } from "react";

function useIntersectionObserver(callback) {
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback?.();
      },
      { threshold: 0.5 }
    )
  );

  const observe = (element) => {
    observer.current.observe(element);
    return () => observer.current.unobserve(element);
  };
  return { observe };
}

export default useIntersectionObserver;
