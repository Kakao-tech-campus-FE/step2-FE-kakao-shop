import img from '../../assets/logoKakao.png';
import cart from "../../assets/cart.png";
import * as Head from '../../styles/molecules/Header';
import ImgLink from "../atoms/ImgLink";
import LinkText from "../atoms/LinkText";

const Header = ({email, onClick}) => {
    return(
        <Head.Header>
            <Head.Container>
                <ImgLink to="/" src={img} alt="톡 쇼핑하기" className="header-logo"/>
                    <Head.MenuUtil>
                        <ImgLink to="/cart" src={cart} alt="장바구니" className="header-cart"/>
                        <LinkText text={email ? "로그아웃" : "로그인"} to={email ? '/' : "/login"} className="header-login" onClick={onClick}/>
                    </Head.MenuUtil>
            </Head.Container>
        </Head.Header>
    );
};

export default Header;