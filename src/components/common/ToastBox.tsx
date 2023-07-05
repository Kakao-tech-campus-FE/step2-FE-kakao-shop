import positionObj from '../../constants/position';
import Toast from './Toast';
import { styled } from 'styled-components';

export interface IToastData {
  content: string;
  id: number;
}
interface ToastBoxProps {
  contents: { content: string; id: number }[];
  position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
  bgcolor: string;
  color: string;
  setToastContents: React.Dispatch<React.SetStateAction<IToastData[]>>;
}
function ToastBox({ contents, position, bgcolor, color, setToastContents }: ToastBoxProps) {
  return (
    <Wrapper position={position}>
      {contents.map((content) => (
        <Toast content={content.content} key={content.id} setToastContents={setToastContents} position={position} bgcolor={bgcolor} color={color} />
      ))}
    </Wrapper>
  );
}

export default ToastBox;

const Wrapper = styled.div<{ position: string }>`
  position: fixed;
  ${(props) => positionObj[props.position]};
`;
