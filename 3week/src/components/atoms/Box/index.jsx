import '../../../styles/atoms/Box.css'
import { StyledBox } from './style.ts'

const Box = ({ children, className = "" }) => {
  return <StyledBox className={`box ${className}`}>{children}</StyledBox>
}

export default Box
