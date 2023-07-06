import { useState } from "react";
import "../styles/checklist.css"

const Checkbox = ({ children, disabled, value, checked, onChange }) => {

  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  )
}

const CheckList = () => {
  const [hello, setHello] = useState(false);
  const [world, setWorld] = useState(false);

  return (
    <>
      <h3>체크 리스트</h3>
      <Checkbox checked={hello} onChange={setHello}>
        Hello
      </Checkbox>
      <Checkbox checked={world} onChange={setWorld}>
        World
      </Checkbox>
    </>
  );
}

export default CheckList;