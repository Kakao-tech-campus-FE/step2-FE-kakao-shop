// htmlFor = id느낌, children = 안에 들어갈 내용, className = 클래스 이름
const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
