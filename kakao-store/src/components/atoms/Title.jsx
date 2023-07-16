/**
 * 제목 컴포넌트
 * @param {string} children - 제목
 * @returns
 */

const Title = ({ children }) => {
  return <h1 className="m-3 flex justify-center">{children}</h1>;
};

export default Title;
