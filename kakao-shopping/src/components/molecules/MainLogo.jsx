import Title from "../atoms/Title";
import { Link } from "react-router-dom";
const MainLogo = ({className}) => {
  return (
    <div className={className}>
      <Link to="/main" >
        <Title>
          <img className="block" src="/assets/kakaologo.png" alt="main_Logo"></img>
        </Title>
      </Link>
    </div>
  )
}

export default MainLogo;