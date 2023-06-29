import { useState } from 'react';
import styled from 'styled-components';

const cartList = [
  { value: '귤 한 박스', label: '귤 한 박스' },
  { value: '잠옷', label: '잠옷' },
  { value: '공책', label: '공책' },
  { value: '무드등', label: '무드등' },
];

const CheckList = () => {
  const [lang, setLang] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLang((prev) => [...prev, value]);
    } else {
      setLang((prev) => prev.filter((x) => x !== value));
    }
  };

  return (
    <CheckListBlock>
      <h4>체크리스트</h4>
      <div className="title">Select from the list</div>
      {cartList.map((x, i) => (
        <label key={i}>
          <input type="checkbox" name="lang" value={x.value} onChange={handleChange} /> {x.label}
        </label>
      ))}
      <div>Selected : {lang.length ? lang.join(', ') : null}</div>
    </CheckListBlock>
  );
};

const CheckListBlock = styled.div`
  text-align: center;
`;
export default CheckList;
