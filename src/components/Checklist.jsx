import React from 'react';

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
      <legend>Checklist</legend>
      <p>checked: {checked}</p>
      <input type="checkbox" name="checklist" value="0" onChange={handleChange}/>0
      <br />
      <input type="checkbox" name="checklist" value="1" onChange={handleChange}/>1
      <br />
      <input type="checkbox" name="checklist" value="2" onChange={handleChange}/>2
      <br />
      <input type="checkbox" name="checklist" value="3" onChange={handleChange}/>3
      <br />
      <input type="checkbox" name="checklist" value="4" onChange={handleChange}/>4
      <br />
      <input type="checkbox" name="checklist" value="5" onChange={handleChange}/>5
      <br />
      <input type="checkbox" name="checklist" value="6" onChange={handleChange}/>6
      <br />
      <input type="checkbox" name="checklist" value="7" onChange={handleChange}/>7
      <br />
      <input type="checkbox" name="checklist" value="8" onChange={handleChange}/>8
      <br />
      <input type="checkbox" name="checklist" value="9" onChange={handleChange}/>9
      <br />
    </fieldset>
  );
}

export default Checklist;