import { useState } from "react";

const useInput = (initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setInputValue({ ...inputValue, [name]: value });
    };

    return [inputValue, handleOnChange];
};

export default useInput;
