import { useState } from "react";

const useInput = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    const idString = id + "IsValid";
    let validateCheck = false;
    if(id === 'email') {
      validateCheck = /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(value);
    } else if(id === 'password') {
      validateCheck = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@##$%^&*])[a-zA-Z0-9~!@##$%^&*]{8,20}$/.test(value);
    } else if(id === 'username') {
      validateCheck = /^[a-zA-Z0-9]{4,12}$/.test(value);
    }
    setValues((prev) => ({ ...prev, [id]: value, [idString]: validateCheck }));
  };

  return [values, handleOnChange];
};

export default useInput;