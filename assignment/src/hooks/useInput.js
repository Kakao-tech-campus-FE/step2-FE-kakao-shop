import { useState } from "react";

const useInput = (initialValue) => {
  // const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({...prev, [name]: value}));
    // setLoading(false);
  };
  // const handleOnClick = () => {};
  return { value, handleOnChange };
};

export default useInput;
