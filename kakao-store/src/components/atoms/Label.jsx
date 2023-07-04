const Label = ({ children, htmlfor, className }) => {
  return (
    <label htmlfor = {htmlfor} className={className}>
      {children}
    </label>
  );
};

export default Label;