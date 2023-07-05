const Container = ({ children, className, width = "100%" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
