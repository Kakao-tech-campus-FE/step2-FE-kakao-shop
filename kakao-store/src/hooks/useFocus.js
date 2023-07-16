import { useCallback, useState } from "react";

const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false);
  const onFocus = useCallback(() => setIsFocus(true), []);
  const onBlur = useCallback(() => setIsFocus(false), []);
  return [isFocus, onFocus, onBlur];
};

export default useFocus;
