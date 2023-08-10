import { useCallback, useEffect } from "react";

function useOutsideClick(ref, callback) {
  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback, handleClick]);
}

export default useOutsideClick;
