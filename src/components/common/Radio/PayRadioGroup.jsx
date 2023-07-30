import Radio from "./Radio";
import "./PayRadioGroup.css";

const payOptions = [
  { label: "카카오페이머니", id: "payMoney" },
  { label: "카카오페이카드", id: "payCard" },
];

export default function PayRadioGroup({ className, onChange }) {
  return (
    <div className="pay-radio-group">
      {payOptions.map((option) => (
        <Radio
          className={className}
          id={option.id}
          name="pay-radio-group"
          label={option.label}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
