import { useState } from "react";

const useInput = (initialValue) => {
  // const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValue(initialValue);
  };

  return { value, handleOnChange, reset };
};

export default useInput;
