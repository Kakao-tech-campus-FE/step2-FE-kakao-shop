import React from 'react';

const RadioButton = () => {
  const [radio, setRadio] = React.useState(0)

  return (
    <form>
      <p>상태: {radio}번이 선택되었습니다.</p>
      <label><input type="radio" name="option" value="option1" onClick={() => {setRadio(1)}}/>Option1</label>
      <label><input type="radio" name="option" value="option2" onClick={() => {setRadio(2)}}/>Option2</label>
    </form>
  );
}

export default RadioButton;