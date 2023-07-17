import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Styled = {
  Container: styled.span`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Star: styled.img`
    margin: 0 0.05rem;
  `,
  None: styled.div`
    display: none;
  `,
};

function Stars({ starCount, ...props }) {
  return (
    <Styled.Container {...props}>
      {Array.from({ length: starCount }, () => 0).map((v, i) => (
        <Styled.Star
          key={i}
          width="22"
          height="22"
          src="https://img.icons8.com/ios-filled/50/4684e9/star--v1.png"
          alt="star--v1"
        />
      ))}

      <Styled.None>
        <a href="https://icons8.com/icon/7856/star">Star</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </Styled.None>
    </Styled.Container>
  );
}

Stars.propTypes = {
  starCount: PropTypes.number,
};

Stars.defaultProps = {
  starCount: 2,
};

export default React.memo(Stars);
