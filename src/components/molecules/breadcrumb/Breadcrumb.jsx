import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: inline-flex;
  color: rgb(50, 50, 50);
  .icon {
    padding: 0 0.25rem;
  }

  .icon:last-child {
    display: none;
  }
`;

const Path = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

function Breadcrumb({ path }) {
  return (
    <Container>
      {path.map((p) => (
        <div key={p}>
          <Path>{p}</Path>
          <div className="icon"> &gt; </div>
        </div>
      ))}
    </Container>
  );
}

Breadcrumb.propTypes = {
  path: PropTypes.array,
};

Breadcrumb.defaultProps = {
  path: ["Home", "storybook"],
};
export default Breadcrumb;
