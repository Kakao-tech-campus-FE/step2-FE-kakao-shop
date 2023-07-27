import React, { useState } from 'react';
import CheckBox from './CheckBox';

const CheckList = () => {
  const [checkBoxInfoList, setCheckBoxInfoList] = useState([
    {
      id: 1,
      label: '가',
      isChecked: false,
    },
    {
      id: 2,
      label: '나',
      isChecked: false,
    },
    {
      id: 3,
      label: '다',
      isChecked: false,
    },
    {
      id: 4,
      label: '라',
      isChecked: false,
    },
  ]);

  const handleCheckBoxInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;

    setCheckBoxInfoList((prevCheckBoxInfoList) =>
      prevCheckBoxInfoList.map((checkboxInfo) => {
        if (checkboxInfo.label === name) {
          return {
            ...checkboxInfo,
            isChecked: checked,
          };
        }
        return checkboxInfo;
      }),
    );
  };

  return (
    <div className='checkList'>
      {checkBoxInfoList.map((checkBoxInfo) => (
        <CheckBox
          key={checkBoxInfo.id}
          label={checkBoxInfo.label}
          isChecked={checkBoxInfo.isChecked}
          onCheckBoxInputChange={handleCheckBoxInputChange}
        />
      ))}
    </div>
  );
};

export default CheckList;
