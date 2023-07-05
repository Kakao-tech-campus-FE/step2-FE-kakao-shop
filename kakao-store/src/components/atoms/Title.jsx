import PropTypes from "prop-types";

const Title = ({ children }) => {
  return <h1 className="m-3">{children}</h1>;
};

Title.prototyps = {
  children: PropTypes.node.isRequired, // Title 컴포넌트의 자식 요소
};

export default Title;
