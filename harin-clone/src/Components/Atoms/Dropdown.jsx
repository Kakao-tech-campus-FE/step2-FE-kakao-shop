const Dropdown = (props) => {
  return <div className={props.className}>{props.isOpen && props.children}</div>;
};

export default Dropdown;
