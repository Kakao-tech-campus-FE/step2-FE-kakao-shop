import styled from "styled-components"

const ImageContainer = styled.picture`
  .card {
    width: 21em;
    height: 13em;
    object-fit: cover;
    border-radius: 5px;
  }
  img {
    width: inherit;
  }
`;

const Photo = ({className, src, alt}) => {
  return (
    <ImageContainer className={className}>
      <source srcSet={src} />
      <img src={src} alt={alt} className={className} />
    </ImageContainer>
  );
};

export default Photo;