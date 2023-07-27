import { styled } from "styled-components";

interface Props {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  radius?: string;
}

const Photo = ({ src, alt, width, height, radius }: Props) => {
  return (
    <Wrapper radius={radius}>
      <Picture width={width} height={height} radius={radius}>
        <source srcSet={src} />
        <img src={src} alt={alt} />
      </Picture>
    </Wrapper>
  );
};

export default Photo;

const Wrapper = styled.div<Pick<Props, "radius">>`
  overflow: hidden;
  border-radius: ${({ radius }) => radius || "0"};
`;

const Picture = styled.picture<Pick<Props, "width" | "height" | "radius">>`
  width: ${({ width }) => width || "100px"};
  height: ${({ height }) => height || "25px"};

  img {
    width: inherit;
    height: inherit;
    border-radius: ${({ radius }) => radius || "0"};
    object-fit: cover;
    transition: 0.4s;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;
