/**
 * [Atom] 체크박스 컴포넌트 
 * 단일 체크박스를 생성합니다. 체크박스와 label이 함께 출력됩니다.
 * 
 * 매개변수
 * label    : 문자열을 넘겨주면 체크박스 옆에 문자열이 나타납니다.
 * value    : 상위 컴포넌트에서 관리하는 리스트의 인덱스 값이 지정됩니다.
 * checked  : 상위 컴포넌트에서 관리하는 상태에 따라 지정될 boolean 값입니다.
 * onChange : 체크박스 값이 바뀌었을 때 실행될 콜백입니다.
 */

const CheckBox = ({ label, value, checked, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
