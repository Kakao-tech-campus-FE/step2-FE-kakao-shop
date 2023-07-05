import Checkbox from "../atoms/Checkbox";

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
