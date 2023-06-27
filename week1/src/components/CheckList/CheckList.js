import "../../styles/Checkbox.scss";

const CheckList = ({ title, item }) => {
  return (
    <div className="CheckboxPaper">
      <div className="title">{title}</div>
      {item.map((key) => (
        <div className="item">
          <input type="checkbox" id="css" />
          <label htmlFor="css">{key}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckList;
