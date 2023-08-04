import { styled } from 'styled-components';

const StyledOl = styled.ol`
    border: 2px solid ${({ theme }) => theme.color.light_gray};
    border-radius: ${({ theme }) => theme.border.rad_sm};
    width: 100%;
`;

export default StyledOl;
