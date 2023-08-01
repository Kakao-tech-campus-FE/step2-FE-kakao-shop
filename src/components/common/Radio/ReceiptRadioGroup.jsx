import Radio from "./Radio";
import "./ReceiptRadioGroup.css";

const receiptOptions = [
  { label: "현금영수증 발급신청", id: "cashReceipt" },
  { label: "발급안함", id: "noReceipt" },
];

export default function ReceiptRadioGroup({ className, onChange }) {
  return (
    <div className="receipt-radio-group">
      {receiptOptions.map((option) => (
        <Radio
          className={className}
          id={option.id}
          name="receipt-radio-group"
          label={option.label}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
