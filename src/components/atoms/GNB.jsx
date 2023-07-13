import { Link } from "react-router-dom"
import cookies from "react-cookies";
import "../../App.css"
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../store/slices/userSlice";

const GNB = () => {
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const handleLogout = () => {
        cookies.remove('token');
        dispatch(removeToken());
        alert("logout");
        window.location.reload();
    }
    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}\logoKakao.png`} alt="logoKakao.png" height={30} />
                </Link>
                <nav>
                    <span>
                        {/* 장바구니 버튼 */}
                        <Link to="/cart">
                            <img src={`${process.env.PUBLIC_URL}\cart.png`} height={30} />
                        </Link>
                    </span>
                </nav>
                <span>
                    { token ? (
                        <Link 
                            to="/"
                            onClick={handleLogout}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            {"  "}
                            로그아웃{"  "}
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            {"  "}
                            로그인{"  "}
                        </Link>
                    )}
                </span>
            </div>
        </header>
    )
}

export default GNB;