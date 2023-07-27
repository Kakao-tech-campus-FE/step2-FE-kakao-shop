const calcRem = (size) => `${size / 16}rem`;

const fontSize = {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
};

const padding = {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
};

const margin = {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
};

const border = {
    rad_sm: calcRem(4),
    rad_base: calcRem(8),
    rad_lg: calcRem(12),
};

const color = {
    black: '#212529',
    white: '#f8f9fa',
    dark_gray: '#495057',
    gray: '#adb5bd',
    light_gray: '#dee2e6',
    green: '#4f772d',
    light_green: '#90a955',

    red: '#DC3434',
};

const location = {
    flex: (direction = 'row', align = 'center', justify = 'center') => `
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
    `,
};

const theme = {
    fontSize,
    padding,
    margin,
    color,
    border,
    location,
};

export default theme;
