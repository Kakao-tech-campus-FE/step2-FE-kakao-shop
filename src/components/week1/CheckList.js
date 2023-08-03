const CheckList = ({ checkList, setCheckList }) => {
  const handleCheckChange = (index) => {
    const newCheckList = [...checkList];
    newCheckList[index].checked = !newCheckList[index].checked;
    setCheckList(newCheckList);
  };

  return (
    <div className={"check-list-container"}>
      <ul>
        {checkList.map((check, index) => (
          <li
            key={index}
            className={"check-list-item"}
            onClick={() => {
              handleCheckChange(index);
            }}
          >
            <input
              className="check-box"
              type={"checkbox"}
              checked={check?.checked}
            />
            <span>{check.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckList;
