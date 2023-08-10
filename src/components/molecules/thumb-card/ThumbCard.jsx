import styled from "styled-components";
import PropTypes from "prop-types";
import Badge from "@/components/atoms/badge/Badge.jsx";

const Styled = {
  Card: styled.a`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;

    display: inline-block;
    overflow: hidden;
    border-radius: 0.5rem;
    cursor: pointer;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 0.35rem;
    transition: all 0.35s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  `,
};

function ThumbCard({ imgSrc, imgAlt, badge }) {
  return (
    <Styled.Card>
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

      <Styled.Image src={import.meta.env.VITE_SHOP_API + imgSrc} alt={imgAlt} />
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
  badge: "마감 2일 전",
};

export default ThumbCard;
