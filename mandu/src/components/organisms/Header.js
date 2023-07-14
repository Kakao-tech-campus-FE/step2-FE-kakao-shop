import {List} from "../atoms/ListItems";
import {TopNavListItem} from "../molecules/NavList";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import cookie from "react-cookies";
import {setId} from "../../redux/userSlice";
import {useEffect} from "react";

const Header = () => {
    const userId = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    const checkValidUser = () => {
        const cookieAccessToken = cookie.load('access_token');
        const cookieUserId = cookie.load('user_id');
        if (cookieAccessToken && cookieUserId) {
            dispatch(setId(cookieUserId));
        }
    }

    useEffect(() => {
        checkValidUser();
    }, []);

    return (
        <header className="mt-1 max-w-screen-xl flex items-center w-full">
            <img alt="톡쇼핑하기" className="h-5 mx-2"
                 src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230711/165439/assets/images/pc/pc_logo.png"/>
            <List className="mt-1 flex-grow">
                <TopNavListItem link="/">홈</TopNavListItem>
                <TopNavListItem link="/about">브랜드데이</TopNavListItem>
                <TopNavListItem link="/about">베스트</TopNavListItem>
                <TopNavListItem link="/about">라이브</TopNavListItem>
                <TopNavListItem link="/about">기획전</TopNavListItem>
            </List>
            <div className="flex mb-1">
                <div>
                    <Link to="/cart">
                        <img alt="장바구니" className="h-7 mx-2" src="cart.png"/>
                    </Link>
                </div>
                <div className="pl-7 border-l-2 ml-4 px-2">
                    {userId
                        ? <div className="my-2">{`유저 id : ${userId}`}</div> :
                        <Link to="/login"
                              className="text-sm ">
                            로그인
                        </Link>}
                </div>
            </div>
        </header>
    );
}

export default Header;