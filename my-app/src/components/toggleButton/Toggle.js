import React, { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  // 토글 버튼을 클릭할 때 토글 상태를 변경하는 함수
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? '켜짐' : '꺼짐'}
    </button>
  );
}

export default ToggleButton;


