// props
// children: h1 태그 안에 표시될 텍스트
const Title = ({ className="", children }) => {
  return <h1 className={` text-2xl font-bold ${className}`}>{children}</h1>;
};

export default Title;
