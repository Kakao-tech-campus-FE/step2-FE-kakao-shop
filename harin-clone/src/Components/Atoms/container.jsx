const Container = ({ children, className }) => {
  return <div className={`container items-center ${className}`}>{children}</div>
};

export default Container;