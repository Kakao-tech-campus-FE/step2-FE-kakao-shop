import Checkbox from "../atoms/Checkbox";

/**
 * 체크박스 그룹 컴포넌트
 * 체크박스와 여러 옵션을 묶어서 보여주는 컴포넌트
 *
 * @param {string} name - 체크박스 그룹의 이름
 * @param {Array<{id: string, value: string, text: string, checked: boolean}>} items - 체크박스 그룹에 들어갈 옵션
 * @param {function} onChange - 체크박스의 상태가 변경될 때 실행할 함수
 * @returns {JSX.Element} - 체크박스 그룹 컴포넌트의 JSX 요소
 */
const CheckboxGroup = ({ name, items, onChange }) => {
  return (
    <div>
      {items.map((item) => (
        <label
          key={item.id}
          className="flex items-center cursor-pointer"
          htmlFor={item.id}
        >
          <Checkbox
            id={item.id}
            name={name}
            value={item.value}
            checked={item.checked}
            onChange={onChange}
          />
          <span>{item.text}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
