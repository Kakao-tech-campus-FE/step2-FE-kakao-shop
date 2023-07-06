import { RadioContent } from "../App";

const RadioButtonList = ({ label, children, ...rest }) => {

  return (
    <fieldset>
      <legend>{label}</legend>
      <RadioContent.Provider value={rest}>
        {children}
      </RadioContent.Provider>
    </fieldset>
  );
}

export default RadioButtonList;