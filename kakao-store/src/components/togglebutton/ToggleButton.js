import React, { useState } from 'react';
import './ToggleButton.css';
/*
1. ToggleButton 컴포넌트에서는 라벨과 onToggle 함수를 인자로 전달받음
2. 라벨은 토글 버튼의 텍스트로 사용
3. onToggle 함수는 토글 버튼의 상태가 변경될 때마다 실행
4. useState 훅을 사용하여 토글 버튼의 상태를 저장
5. useState 훅은 배열을 반환하며, 첫 번째 요소는 상태 값, 두 번째 요소는 상태 값을 변경하는 함수
6. useState 훅의 인자로는 상태 값의 초기값을 전달
7. setIsToggled 함수를 사용하여 상태 값을 변경
8. 토글 버튼의 상태 값이 true이면 checked 속성을 true로 설정
9. 토글 버튼을 클릭하면 handleToggle 함수가 실행되며, 토글 버튼의 상태 값을 변경
10. 토글 버튼의 상태 값이 변경되면 onToggle 함수가 실행되며, 토글 버튼의 상태 값을 인자로 전달
*/
const ToggleButton = ({ label, onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    const toggledValue = !isToggled;
    setIsToggled(toggledValue);
    onToggle(toggledValue);
  };

  return (
    <div className="toggle-button">
      <label className="toggle-button-label">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
        />
        <span className="toggle-button-slider" />
        <span className="toggle-button-text">{label}</span>
      </label>
    </div>
  );
};

export default ToggleButton;
