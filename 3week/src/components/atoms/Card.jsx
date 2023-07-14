import { Link } from "react-router-dom"
import "../../styles/atoms/Card.css"

const Card = ({ to, children }) => {
  return (
    // Link element react 개발시 꼭 사용!
    // Link : react 상에서 페이지 변화하는 형태로 작동하지 않음, UX적으로도 부드럽게 작동
    <Link className="card" to={to}>
      {children}
    </Link>
  )
}

export default Card