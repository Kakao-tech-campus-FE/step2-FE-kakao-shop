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