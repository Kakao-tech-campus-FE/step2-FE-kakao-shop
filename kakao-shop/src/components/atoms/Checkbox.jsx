/**
 * 체크박스 컴포넌트
 * 카카오의 체크박스 디자인을 따름
 *
 * @param {string} id - 체크박스의 id
 * @param {string} name - 체크박스의 name
 * @param {string} value - 체크박스의 value
 * @param {boolean} checked - 체크박스의 체크 여부
 * @param {function} onChange - 체크박스의 체크 여부 변경 시 실행할 함수
 * @returns {JSX.Element} - 체크박스 컴포넌트의 JSX 요소
 */
const Checkbox = ({ id, name, value, checked, onChange }) => {
  return (
    <input
      className="form-checkbox w-5 h-5 mr-2 rounded-full bg-white border-gray-300 cursor-pointer text-kakao-yellow focus:ring-kakao-yellow"
      type="checkbox"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
