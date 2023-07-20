const OptionColumn = ({ product }) => {
  const { option } = product;
  return (
    <div className="option-column">
      <div className="option-name mt-4 line-clamp-2">{option}</div>
    </div>
  );
};
