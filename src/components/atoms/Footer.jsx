import { styled } from "styled-components";

const Footer = () => {
    return (
        <FooterBox>
            <div>
                <span>이용약관</span>
                <span>개인정보 처리 방침</span>
                <span>운영정책</span>
                <span>고객센터</span>
                <span>공지사항</span>
                <span>한국어</span>
                <p>Copyright © Kakao Corp. All rights reserved.</p>
            </div>
        </FooterBox>
    );
};

export default Footer;

const FooterBox = styled.div`
    display : flex;
    width: 100%;
    min-width : 550px;
    height: 120px;
    background-color: #ddd;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    padding : 10px 0 10px 0;
    & > div > span {
        margin : 0 5px 0 5px;
    }
    & > div > p {
        color : #777777
    }
`