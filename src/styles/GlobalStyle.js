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

    html, body {
        min-width: 95vw;
        min-height: 100vh;
    }

    #root{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
    }

    picture > img {
        width: inherit;
    }

    input { 
        -webkit-appearance : none;
        -moz-appearance:none;
        appearance:none;
        -o-appearance: none;
    }

    input[type='checkbox'] {
        display: inline-block;
        width: 1.25rem;
        height: 1.25rem;
        background: url('https://s.wemep.co.kr/ui/v2.8.307/dist/pc/css/spr/common.png') 0 -438px no-repeat;
        vertical-align: top;
    }

    input[type='checkbox']:checked {
        box-shadow: none;
        background-position: -75px -438px;
    }

    ol, ul {
        list-style: none;
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
