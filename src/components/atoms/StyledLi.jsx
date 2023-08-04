import { styled } from 'styled-components';

const StyledLi = styled.li`
    padding: ${({ theme }) => theme.padding.base};
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        border-bottom: 2px solid ${({ theme }) => theme.color.light_gray};
    }
`;

export default StyledLi;
