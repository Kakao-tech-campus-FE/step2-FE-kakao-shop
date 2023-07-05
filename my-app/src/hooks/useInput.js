import { useState, useCallback } from "react";

const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const inputValue = e.target.value;
      setValue(inputValue);

      if (validation(inputValue)) {
        setErrorMessage("");
        setIsValid(true);
      } else {
        setErrorMessage("입력 형식이 올바르지 않습니다.");
        setIsValid(false);
      }
    },
    [validation]
  );

  return [value, handleChange, isValid, errorMessage];
};

export default useInput;
