import styled from '@emotion/styled';

const Skeleton = () => {
  return <Root />;
};

Skeleton.Circle = function ({ size, className }: CircleProps) {
  return <Circle size={size} className={className} />;
};

Skeleton.Box = function ({ width, height, className }: BoxProps) {
  return <Box width={width} height={height} className={className} />;
};

Skeleton.Paragraph = function ({ widthPercent, fontSize = 16, lineHeight = 2, className }: ParagraphProps) {
  return <Paragraph widthPercent={widthPercent} fontSize={fontSize} lineHeight={lineHeight} className={className} />;
};

export default Skeleton;

type CircleProps = {
  className?: string;
  size: number;
};

type BoxProps = {
  className?: string;
  width: number;
  height: number;
};

type ParagraphProps = {
  className?: string;
  widthPercent: number;
  fontSize?: number;
  lineHeight?: number;
};

const Root = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-image: linear-gradient(90deg, #dfe3e8 0px, #efefef 40px, #dfe3e8 80px);
  background-size: 200% 200%;
  background-position: 0 center;
  animation: skeleton--loading 1s infinite linear;

  @keyframes skeleton--loading {
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: -100%;
    }
  }
`;

const Circle = styled(Root)<CircleProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
`;

const Box = styled(Root)<BoxProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

const Paragraph = styled(Root)<ParagraphProps>`
  width: ${({ widthPercent }) => `${widthPercent}%`};
  height: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
`;
