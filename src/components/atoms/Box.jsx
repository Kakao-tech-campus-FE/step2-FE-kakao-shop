import { styled } from 'styled-components';

const Box = ({
    children,
    className = '',
    direction = 'row',
    align = 'center',
    justify = 'center',
    gap = '0',
    width = '100%',
}) => {
    return (
        <StyledDiv
            className={className}
            direction={direction}
            align={align}
            justify={justify}
            gap={gap}
            width={width}
        >
            {children}
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    ${({ theme, direction, align, justify }) => theme.location.flex(direction, align, justify)};
    padding: ${({ theme }) => theme.padding.small};
    gap: ${({ gap }) => gap};
    border: 1.5px solid ${({ theme }) => theme.color.light_gray};
    border-radius: ${({ theme }) => theme.border.rad_sm};
    width: ${({ width }) => width};
`;

export default Box;
