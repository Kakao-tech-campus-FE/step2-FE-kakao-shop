import SelectedOption from "../../atoms/ProductDetailPage/SelectedOption";

const SelectedOptions = ({ selectedOptions, onQuantityChange, onRemove }) => {
  return (
    <div className="selected-options">
      {selectedOptions.map((option) => (
        <SelectedOption
          key={option.id}
          option={option}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default SelectedOptions;
