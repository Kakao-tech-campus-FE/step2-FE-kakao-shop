import styled from "styled-components";

const ImgPhoto = styled.img`
  border-radius: 10px;
`;

const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <ImgPhoto src={src} alt={alt} />
    </picture>
  );
};

export default Photo;
