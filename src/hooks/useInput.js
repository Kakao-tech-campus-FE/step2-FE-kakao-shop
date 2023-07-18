// src/hooks/useInput.js
import { useState } from "react";

const useInput = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const getValue = (name) => {
    return values[name];
  };

  return [values, handleOnChange, getValue];
};

export default useInput;
