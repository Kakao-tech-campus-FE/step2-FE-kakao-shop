import { Link } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const MainLogo = ({className}) => {
  return (
    <div className={className}>
      <Link to={staticServerUrl + "/main"} >
        <h1>
          <img className="block" src="/assets/kakaologo.png" alt="main_Logo"></img>
        </h1>
      </Link>
    </div>
  )
}

export default MainLogo;