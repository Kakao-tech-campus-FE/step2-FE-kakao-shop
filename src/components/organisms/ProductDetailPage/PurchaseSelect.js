import SelectOptionList from "../../molecules/ProductDetailPage/SelectOptionList";
import SelectedOptions from "../../molecules/ProductDetailPage/SelectedOptions";

const PurchaseSelect = ({
  options,
  onSelectOption,
  selectedOptions,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="purchase-select">
      <SelectOptionList options={options} onSelectOption={onSelectOption} />
      <SelectedOptions
        selectedOptions={selectedOptions}
        onQuantityChange={onQuantityChange}
        onRemove={onRemove}
      />
    </div>
  );
};

export default PurchaseSelect;
