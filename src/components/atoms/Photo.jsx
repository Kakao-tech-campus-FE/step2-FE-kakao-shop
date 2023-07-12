import { styled } from "styled-components";

const StyledPicture = styled.picture`
  border-radius: 10px;
  z-index: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 200px;

  & > img {
    width: inherit;
    transition: 0.5s all ease-in-out;
    transform: scale(1.1);
  }
  &:hover > img {
    transform: scale(1.3);
  }
`;

const Photo = ({ src, alt }) => {
  return (
    <StyledPicture>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </StyledPicture>
  );
};

export default Photo;
