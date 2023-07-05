import React from 'react';
import './checklist.css'

const Checklist = () => {
  const [checked, setChecked] = React.useState("")

  const handleChange = (event) => {
    if (event.target.checked === true)
      setChecked(checked + event.target.value)
    else
      setChecked(checked.replace(event.target.value, ''))
  }

  return (
    <fieldset>
      <p>선택된 과일: {checked}</p>
      <input type="checkbox" name="checklist" value="사과" onChange={handleChange}/>사과
      <br />
      <input type="checkbox" name="checklist" value="바나나" onChange={handleChange}/>바나나
      <br />
      <input type="checkbox" name="checklist" value="파인애플" onChange={handleChange}/>파인애플
      <br />
      <input type="checkbox" name="checklist" value="복숭아" onChange={handleChange}/>복숭아
      <br />
      <input type="checkbox" name="checklist" value="포도" onChange={handleChange}/>포도
      <br />
      <br></br>
    </fieldset>
    
  );
}

export default Checklist;