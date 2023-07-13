//custom hook
import {useState} from "react"
const useInput = (initialValue) =>{

  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => { // onChange occur then extract name and value

    const {name, value} = e.target; // 
    setValue((prev) =>({ ...prev, [name] : value}));  //and update value

  };


  return { value, handleOnChange};
};

export default useInput;