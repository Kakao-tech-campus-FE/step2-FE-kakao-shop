const CheckBox = ({ value, labelClassName, children, onChange, checked }) => {
  return (
    <label className={labelClassName}>
      <input
        value={value}
        type="checkbox"
        className="mr-2 h-[22px] w-[22px] appearance-none border border-gray-300 bg-cover checked:border-0 checked:bg-[url('../public/check.png')]"
        onChange={onChange}
        checked={checked}
      />
      {children}
    </label>
  );
};

export default CheckBox;
