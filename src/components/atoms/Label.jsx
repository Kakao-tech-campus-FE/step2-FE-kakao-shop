const Label = ({ htmlFor, children }) => {
  // htmlFor: input의 id 값
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
