import { styled } from 'styled-components';

const Title = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h1`
    margin: ${({ theme }) => theme.margin.xl};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
`;

export default Title;
