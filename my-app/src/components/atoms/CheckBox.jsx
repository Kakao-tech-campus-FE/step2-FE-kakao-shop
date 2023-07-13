// label: label의 text
// checked: 체크된 상태인지 나타내는 Boolean 값
// onChange: change 핸들러
const CheckBox = ({ label, checked, onChange }) => {
  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </>
  );
};

export default CheckBox;
