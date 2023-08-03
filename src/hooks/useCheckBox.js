import { useState } from "react";

const useCheckBox = (initialValue, allValue) => {
  const [checkedOptions, setCheckedOptions] = useState(initialValue);

  const handleOnChangeCheck = (e) => {
    const value = e.target.value;
    if (!checkedOptions.includes(value)) {
      setCheckedOptions((prev) => [...prev, value]);
    } else {
      setCheckedOptions((prev) => prev.filter((el) => el !== value));
    }
  };

  const handleOnChangeCheckAll = (e) => {
    if (e.target.checked) {
      const strArr = allValue.map((value) => value.toString());
      setCheckedOptions([...strArr]);
    } else {
      setCheckedOptions([]);
    }
  };

  return {
    checkedOptions,
    setCheckedOptions,
    handleOnChangeCheck,
    handleOnChangeCheckAll,
  };
};

export default useCheckBox;
