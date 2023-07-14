import { styled } from "styled-components";

const StyledPicture = styled.picture`
  display: block;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  overflow: hidden;

  & > img {
    width: inherit;
  }
`;

const ProductPhoto = ({ src, alt }) => {
  return (
    <StyledPicture>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </StyledPicture>
  );
};

export default ProductPhoto;
