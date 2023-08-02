const OptionItem = ({ children, options }) => {
  return (
    <div className="flex p-2">
      <div className="w-28">{children}</div>
      <div>{options}</div>
    </div>
  );
};

export default OptionItem;
