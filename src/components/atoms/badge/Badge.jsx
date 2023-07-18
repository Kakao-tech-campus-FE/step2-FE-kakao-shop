import styled from "styled-components";
import PropTypes from "prop-types";

const Styled = {
  Badge: styled.span`
    padding: 0 0.5rem;
    width: fit-content;
    height: 1.5rem;

    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 0.3rem;
    color: white;
    font-size: 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function Badge({ children, ...props }) {
  return <Styled.Badge {...props}>{children}</Styled.Badge>;
}

Badge.propTypes = {
  children: PropTypes.string,
};

Badge.defaultProps = {
  children: "",
};

export default Badge;
