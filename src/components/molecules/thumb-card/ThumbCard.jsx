import styled from "styled-components";
import Badge from "@/components/atoms/badge/Badge.jsx";
import PropTypes from "prop-types";

const Styled = {
  Card: styled.a`
    position: relative;
    width: 17.75rem;
    height: 10rem;

    display: inline-block;
    overflow: hidden;
    border-radius: 0.35rem;
    cursor: pointer;
  `,
  Image: styled.img`
    width: 17.75rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.35rem;
    transition: all 0.35s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  `,
};

function ThumbCard({ imgSrc, imgAlt, badge }) {
  const imgUrl = new URL("/assets" + imgSrc, import.meta.url).href;
  return (
    <Styled.Card>
      {badge && (
        <Badge
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: "2",
          }}
        >
          {badge}
        </Badge>
      )}
      <Styled.Image src={imgUrl} alt={imgAlt} />
    </Styled.Card>
  );
}

ThumbCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  badge: PropTypes.string,
};

ThumbCard.defaultProps = {
  imgSrc: "/images/1.jpg",
  imgAlt: "alt",
  badge: "Badge",
};

export default ThumbCard;
