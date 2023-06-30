import React from 'react';
import "./togle.css";

const ToggleButton = () => {
  const [state, setState] = React.useState(false);

  const handleState = () => {
    setState(!state);
  }

  return (
    <form>
      <p>토글 상태 : {state.toString()}</p>
      <input id="toggle" role="switch" type="checkbox" onChange={handleState} />
      <br></br>
      <br></br>
      <br></br>
    </form>
  );
}

export default ToggleButton;