/**
 *
 * @param options <SelectBox
 *     options={[
 *         { value: "1", label: "Option 1" },
 *         { value: "2", label: "Option 2" },
 *         { value: "3", label: "Option 3" },
 *     ]}
 * />
 * @param onChange
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SelectBox = ({ options, onChange, ...props }) => (
  <select onChange={onChange} {...props}>
    {options.map((option, index) => (
      <option
        key={index}
        value={option.value}
        defaultValue={props.defaultValue === option.value}
      >
        {option.label}
      </option>
    ))}
  </select>
);
export default SelectBox;
