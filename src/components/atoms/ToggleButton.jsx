const ToggleButton = ({ label, value, checked, onChange }) => {
    return (
      <div>
        <span>{label}</span>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default ToggleButton;