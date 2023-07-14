import { styled } from 'styled-components';

const Wrapper = ({ children, className = '' }) => {
    return <StyledWrapper className={`wrapper ${className}`}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
    padding: ${({ theme }) => theme.padding.xxxl};
    margin: ${({ theme }) => theme.margin.xl};
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Layout */
    background-color: #fff;
    border-radius: ${({ theme }) => theme.border.rad_base};
`;

export default Wrapper;
