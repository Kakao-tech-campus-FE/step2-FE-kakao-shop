import { useState } from "react";

const useInput = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
};

export default useInput;
