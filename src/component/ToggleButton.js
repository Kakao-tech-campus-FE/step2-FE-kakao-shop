import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);
  // isToggled가 true면 반짝, false면 어둠
  // setIsToggled로 isToggled 상태를 정해주기 -> 뒤에 handleClick에서 지정해줌

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button onClick={handleClick}>
      {isToggled ? '주세요' : '괜찮아요'}
    </button>
  );
};

export default ToggleButton;