import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  let currentLocation = '';
  
  const crumbs = location.pathname // 현재 url 경로
    .split('/') // 경로를 '/'로 분할
    .filter(crumb => crumb !== '') // 빈 문자열은 필터링
    .map(crumb => {
    currentLocation += `/${crumb}`; //현재 경로를 모두 문자열에 추가, 각 currentLocation은 주소가 됨
    return (
      <span className="crumb" key={crumb}>
        <Link to={currentLocation}>{crumb}</Link>
      </span>
    )
  });

  return (
    <div className="breadcrumbs">
      <span className="crumb"><Link to='/'>Main</Link></span>
      {crumbs}
    </div>
  )
}
export default BreadCrumb;