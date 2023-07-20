import '../../styles/Atoms/Box.css';
import { StyledBox } from './style';

const Box = ({ children, className = "red" }) => {
    return <StyledBox className={`box ${className}`}>{children}</StyledBox>
}

export default Box;