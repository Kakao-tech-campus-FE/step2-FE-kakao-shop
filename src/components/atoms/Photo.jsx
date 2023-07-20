import styled from "styled-components";

const ImgPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      {/* <source srcSet={`${src}`} /> */}
      <ImgPhoto src={src} alt={alt} />
    </picture>
  );
};

export default Photo;
