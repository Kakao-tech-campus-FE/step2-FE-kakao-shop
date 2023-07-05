import React from 'react';

const RadioButton = () => {
  const [radio, setRadio] = React.useState(0)

  return (
    <form>
      <br></br>
      <p>선택된 메뉴 {radio}</p>
      <label><input type="radio" name="option" value="치킨" onClick={() => {setRadio(0)}}/>치킨 : 0</label>
      <label><input type="radio" name="option" value="피자" onClick={() => {setRadio(1)}}/>피자 : 1</label>
      <label><input type="radio" name="option" value="피자" onClick={() => {setRadio(2)}}/>햄버거 : 2</label>
    </form>
  );
}

export default RadioButton;