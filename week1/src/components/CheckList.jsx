import { useState } from 'react';
import styled from 'styled-components';

const cartList = [
  { value: '귤 한 박스', label: '귤 한 박스' },
  { value: '잠옷', label: '잠옷' },
  { value: '공책', label: '공책' },
  { value: '무드등', label: '무드등' },
];

const CheckList = () => {
  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCart((prev) => [...prev, value]);
    } else {
      setCart((prev) => prev.filter((x) => x !== value));
    }
  };

  return (
    <CheckListBlock>
      <h4>체크리스트</h4>
      <ShoppingCart>
        <div className="title">Select from the list</div>
        {cartList.map((x, i) => (
          <CheckboxLabel key={i}>
            <CheckboxInput type="checkbox" name="cart" value={x.value} onChange={handleChange} />
            <CustomCheckbox checked={cart.includes(x.value)}>
              {cart.includes(x.value) ? '✔️' : ''}
            </CustomCheckbox>
            {x.label}
          </CheckboxLabel>
        ))}
        <div>Selected: {cart.length ? cart.join(', ') : null}</div>
      </ShoppingCart>
    </CheckListBlock>
  );
};

const CheckListBlock = styled.div`
  text-align: center;
`;

const ShoppingCart = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div:not(.title) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CustomCheckbox = styled.span`
  margin: 10px;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  ${CheckboxInput}:checked ~ & {
    background-color: #2196f3;
    color: white;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  ${CheckboxInput}:checked ~ &:after {
    display: block;
  }

  &:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export default CheckList;
