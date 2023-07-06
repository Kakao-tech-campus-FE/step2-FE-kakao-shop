import {useState} from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleOnChange = (event) => {
        const {id, value} = event.target;
        // console.log(id, value)
        setValue((prev) => {
            // console.log(prev);
            return {...prev, [id]: value}
        })
    };
    // setValue({ ...value, [name]: value[name]});
    return [value, handleOnChange];
};

export default useInput;