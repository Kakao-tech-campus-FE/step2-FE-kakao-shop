import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CardCss = styled.div`
  width: 15rem;
`;


const Card = ({ to, children }) => {
    return (
        <CardCss><Link to={to}>
            {children}
        </Link></CardCss>

    );
};
//이번주 과제
export default Card;