import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    // name: email, value: juyeongnoh@gm...
    const { name, value } = e.target;

    // setValue는 아래 문법과 다름없음
    // setValue((prev) => {
    //   return {
    //     ...prev,
    //     [name]: value
    //   }
    // })
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return { value, handleOnChange };
};

export default useInput;
