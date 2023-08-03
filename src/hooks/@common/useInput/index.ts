import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

const useInput = (
  defaultValue: string,
): [string, ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(defaultValue);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    setValue(e.target.value as string);
  };

  return [value, onChange, setValue];
};

export default useInput;
