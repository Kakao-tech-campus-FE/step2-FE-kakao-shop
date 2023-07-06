const Container = ({ children, className }) => {
  return <div className={`mx-auto w-1/3 h-2/3 align-middle ${className}`}>{children}</div>
};

export default Container;