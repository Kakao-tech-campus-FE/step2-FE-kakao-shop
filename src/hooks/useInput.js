import { useState } from "react";

const useInput = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    const idString = id + "IsValid";

    const validateCheck = 
    id === 'email' ?  // 이메일이면
    /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(value) : // 이메일 체크 
    id === 'password' ?  // 비밀번호면
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@##$%^&*])[a-zA-Z0-9~!@##$%^&*]{8,20}$/.test(value) : // 비밀번호 체크
    /^[a-zA-Z0-9]{4,12}$/.test(value); // 둘 다 아니면 이름임. 이름 체크
    
    setValues((prev) => ({ ...prev, [id]: value, [idString]: validateCheck }));
  };

  return [values, handleOnChange];
};

export default useInput;