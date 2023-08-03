import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    // name: email, value: juyeongnoh@gm...
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return { value, handleOnChange };
};

export default useInput;
