import { useState } from 'react';
import styled from 'styled-components';

const colors = [
  { value: 'silver', label: 'Sliver' },
  { value: 'blue', label: 'Blue' },
  { value: 'grey', label: 'Grey' },
];

const RadioBtn = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('You have submitted:', selectedColor);
  };

  return (
    <RadioBtnContainer>
      <h4>라디오버튼</h4>
      <div className="row">
        <div className="col">
          <form onSubmit={handleFormSubmit}>
            {colors.map((color) => (
              <RadioInput key={color.value} checked={selectedColor === color.value}>
                <input
                  type="radio"
                  name="radio-button"
                  value={color.value}
                  checked={selectedColor === color.value}
                  onChange={handleColorChange}
                />
                <RadioLabel>{color.label}</RadioLabel>
              </RadioInput>
            ))}
            <div className="form-submit">
              <SubmitButton type="submit">Save</SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </RadioBtnContainer>
  );
};

const RadioBtnContainer = styled.div`
  text-align: center;
`;

const RadioInput = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    width: 18px;
    height: 18px;
    border: 2px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background: ${(props) => (props.checked ? '#f87da9' : 'transparent')};
    position: absolute;
    top: 5px;
    left: 12px;
    border-radius: 100%;
    transition: all 0.2s ease;
    transform: scale(${(props) => (props.checked ? '1' : '0')});
    opacity: ${(props) => (props.checked ? '1' : '0')};
  }
`;

const RadioLabel = styled.span`
  position: relative;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export default RadioBtn;
