const Title = ({ children, className = "" }) => {
  return <span className={`title ${className}`}>{children}</span>;
};

export default Title;
