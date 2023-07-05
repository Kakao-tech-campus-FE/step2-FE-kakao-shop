const Checkbox = ({ id, name, value, checked, onChange }) => {
  return (
    <input
      className="form-checkbox appearance-none w-5 h-5 mr-2 rounded-full bg-white border border-solid border-gray-300 cursor-pointer checked:bg-kakao-yellow checked:border-kakao-yellow checked:bg-no-repeat checked:bg-center checked:bg-contain"
      type="checkbox"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      style={{
        backgroundImage: "url(/check.png)",
      }}
    />
  );
};

export default Checkbox;
