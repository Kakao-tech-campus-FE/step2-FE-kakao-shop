import {List} from "../atoms/List";
import {TopNavListItem} from "../molecules/NavList";
import UserNav from "../molecules/UserNav";

const Header = () => {

    return (
        <header className="mx-auto mt-1 max-w-screen-xl flex items-center w-full">
            <img alt="톡쇼핑하기" className="h-5 mx-2"
                 src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230711/165439/assets/images/pc/pc_logo.png"/>
            <List className="mt-1 flex-grow">
                <TopNavListItem link="/">홈</TopNavListItem>
                <TopNavListItem link="/about">브랜드데이</TopNavListItem>
                <TopNavListItem link="/about">베스트</TopNavListItem>
                <TopNavListItem link="/about">라이브</TopNavListItem>
                <TopNavListItem link="/about">기획전</TopNavListItem>
            </List>
            <UserNav/>
        </header>
    );
}

export default Header;