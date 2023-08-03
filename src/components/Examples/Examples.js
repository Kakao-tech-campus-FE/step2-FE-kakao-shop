import React, { useState } from 'react';

import { Toast } from './Toast';
import { Breadcrumb } from './Breadcrumb/Breadcrumb';
import { Carousel } from './Carousel/Carousel';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

import Toggle from './Toggle';

import { Checkbox } from './Checkbox';

const Examples = () => {

  // 토스트용 useState
  const [toastState, setToastState] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 라디오 useState
  const [radioValue, setRadioValue] = useState("A");

  // 토글 sueState 및 메서드
  const [isToggled, setToggled] = useState(false);
  const handleClick = () => { setToggled(!isToggled); };

  // 체크리스트 userState 및 메서드
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const handleCheckbox1Change = (checked) => { setIsChecked1(checked); };
  const handleCheckbox2Change = (checked) => { setIsChecked2(checked); };
  const handleCheckbox3Change = (checked) => { setIsChecked3(checked); };

  return (
    <div>
      <h1>커스텀 컴포넌트</h1>
      {/* 토스트 예제 */}
      <div className="example">
        <h3 className="example-header"> 토스트 </h3>
        <input onChange={(e) => setToastMessage(e.target.value)} />
        <button onClick={() => setToastState(true)}> 메시지 토스트 </button>
        {toastState ?
          <Toast setToastState={setToastState} message={toastMessage} />
          : null}
      </div>

      {/* 브레드크럼 예제 */}
      <div className="example">
        <h3 className="example-header">브레드크럼</h3>
        <Breadcrumb />
      </div>

      {/* 캐러셀 예제 */}
      <div className="example">
        <h3 className="example-header"> 캐러셀 </h3>
        <Carousel/>
      </div>

      {/* 라디오 버튼 */}
      <div className="example">
        <h3 className="example-header"> 라디오 버튼 </h3>
        <RadioGroup label="선택" value={radioValue} onChange={setRadioValue}>
          <Radio value="A">A</Radio>
          <Radio value="B">B</Radio>
          <Radio value="C">C</Radio>
          <Radio value="D">D</Radio>
        </RadioGroup>
        <footer>선택된 값: {radioValue}</footer>
      </div>

      {/* 토글 버튼 */}
      <div className="example">
        <h3 className="example-header"> 토글 버튼 </h3>
        <Toggle isToggled={isToggled} handleClick={handleClick} />
        <p>토글 상태: {isToggled ? 'ON' : 'OFF'}</p>
      </div>

      {/* 체크 리스트 */}
      <div className="example">
        <Checkbox label="Checkbox 1" checked={isChecked1} onChange={handleCheckbox1Change} />
        <Checkbox label="Checkbox 2" checked={isChecked2} onChange={handleCheckbox2Change} />
        <Checkbox label="Checkbox 3" checked={isChecked3} onChange={handleCheckbox3Change} />
        <p>{isChecked1 && "checkbox1 is Checked"}</p>
        <p>{isChecked2 && "checkbox2 is Checked"}</p>
        <p>{isChecked3 && "checkbox3 is Checked"}</p>
      </div>
    </div>
  );
};

export default Examples;