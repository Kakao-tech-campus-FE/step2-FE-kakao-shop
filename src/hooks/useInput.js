import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue.value);
  const [errorMsg, setErrorMsg] = useState(() => {
    const initErrorMsg = {};
    Object.keys(initialValue).forEach((key) => {
      initErrorMsg[key] = "";
    });
    return initErrorMsg;
  });
  const ERROR_MSG = initialValue.ERROR_MSG;

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setValue((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const constraints = initialValue.constraints;

  const validateInput = (id) => {
    const input = value;
    if (input[id] === "") {
      setErrorMsg((prev) => {
        return { ...prev, [id]: ERROR_MSG.required };
      });
      return false;
    } else {
      if (constraints[id](input)) {
        setErrorMsg((prev) => {
          return { ...prev, [id]: "" };
        });
        return true;
      } else {
        setErrorMsg((prev) => {
          return { ...prev, [id]: ERROR_MSG[id] };
        });
        return false;
      }
    }
  };

  return { value, handleOnChange, errorMsg, validateInput };
};

export default useInput;
