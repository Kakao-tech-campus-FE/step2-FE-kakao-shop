import { useState } from "react";

const useInput = (initialValue) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    setLoading(true);
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
    setLoading(false);
  };

  const handleOnClick = () => {};

  return { value, handleOnChange, handleOnClick, loading };
};

export default useInput;

