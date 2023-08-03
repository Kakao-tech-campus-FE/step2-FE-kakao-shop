import { styled } from "styled-components";

const FooterStyle = styled.footer`
  height: 10rem;
  background-color: rgb(222, 222, 222);
  border-top: 1px solid rgb(238, 238, 238);
`;

const Footer = () => {
    return (
        <>
            <FooterStyle>
                <div>Footer</div>
            </FooterStyle>
        </>
    );
};

export default Footer;