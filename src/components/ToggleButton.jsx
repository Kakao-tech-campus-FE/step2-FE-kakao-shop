import React from 'react';
import "../styles/ToggleButton.css";

const ToggleButton = () => {
  const [state, setState] = React.useState(false);

  const handleState = () => {
    setState(!state);
  }

  return (
    <form>
      <p>현재 상태: {state.toString()}</p>
      <input id="toggle" role="switch" type="checkbox" onChange={handleState} />
    </form>
  );
}

export default ToggleButton;