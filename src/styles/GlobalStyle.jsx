import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'pretendard';
        src: url('src/assets/fonts/PretendardVariable.ttf');
    }

    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto,
            'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    body {
        font-family: "Helvetica", "Arial", sans-serif;
        line-height: 1.5;
    }

    h2, p {
        margin: 0;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.375rem;
    }

    p {
        font-size: 1rem;
    }
`;

export default GlobalStyle;
