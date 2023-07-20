import { Outlet } from "react-router-dom"

const MainLayout=()=>{
return(
    <>
    {/*로그인 버튼, 장바구니버튼, 메인로고 */}
    <GNB />
    {/*콘텐츠 영역: 페이지마다 달라지는 영역 */}
    <Outlet />
    {/*푸터 영역 <Footer /> */}
    </>
)
}
// 로그인 할 때 이메일 redux state에 저장이 된 상태
//새로고침 하면 redux state가 초기화되니깐 token
//token
export default MainLayout