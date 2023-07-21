const Dropdown = (props) => {
  return <article className={props.className}>{props.isOpen && props.children}</article>;
};

export default Dropdown;
