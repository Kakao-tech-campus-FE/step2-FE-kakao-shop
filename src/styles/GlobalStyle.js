import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Pretendard Variable";
        src: url("/src/assets/fonts/PretendardVariable.ttf");
    }

    *{
        margin: 0;
        padding: 0;
        font-size: 16px;
        box-sizing: border-box;

        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #f8f9fa;
    }

    #root{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    picture > img {
        width: inherit;
    }

    input { 
        -webkit-appearance : none;
        -moz-appearance:none;
        appearance:none;
    }

    li {
        list-style:none;
    }

    a{
        text-decoration: none;
    }

    h2 {
        font-size: 1.5rem;
    }

    h1 {
        font-size: 1.75rem;
    }

    p {
        font-size: 1rem;
    }
`;

export default GlobalStyle;
