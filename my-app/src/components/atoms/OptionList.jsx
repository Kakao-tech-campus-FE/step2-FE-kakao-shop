const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => {
        <li key={option.id}>
          <span className="name"></span>
          <span className="price"></span>
        </li>;
      })}
    </ol>
  );
};

export default OptionList;
