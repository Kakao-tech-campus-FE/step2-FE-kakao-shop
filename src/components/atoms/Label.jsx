const Label = ({ children, htmlFor, className }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
export default Label;
