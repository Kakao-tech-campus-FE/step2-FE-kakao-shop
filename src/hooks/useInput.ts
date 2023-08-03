import { passwordRegex } from "@utils/regex";
import { useState } from "react";

export const useInput = ({ initValue = "" }: any) => {
  const [inputValue, setInputValue] = useState(initValue);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev: any) => ({ ...prev, [name]: value }));
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password") {
      if (passwordRegex.test(value)) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }
    if (name === "passwordConfirm") {
      if (value === inputValue.password) {
        setConfirmError(false);
      } else {
        setConfirmError(true);
      }
    }
  };
  return { inputValue, passwordError, confirmError, onChange, onBlur };
};
