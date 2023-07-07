import { useState } from "react";

const useStates = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const setValues = (obj) => setValue({ ...value, ...obj });
    return [value, setValues];
};

export default useStates;
