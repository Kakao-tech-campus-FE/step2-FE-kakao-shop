import { styled } from 'styled-components';

const Container = ({ children, className = '' }) => {
    return <StyledContainer className={`container ${className}`}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    padding: ${({ theme }) => theme.padding.base};
    margin: ${({ theme }) => theme.margin.sm};
`;

export default Container;
