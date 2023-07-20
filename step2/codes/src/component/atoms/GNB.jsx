import { useDispatch, useSelector } from "react-redux";
import "../../styles/atoms/GNB.css";
import { Link } from "react-router-dom";
import { setEmail } from "../../store/slices/userSlice"

function GNB() {
    const email = useSelector((state) => state.user.email) 
    const dispatch = useDispatch();

    const handelLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        dispatch(setEmail(null));
        alert("정상적으로 로그아웃되었습니다.");
    };

    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img className = "logoImg" src={"/logoKakao.png"} alt="logoKakao.png" height={30}/>
                </Link>
                <nav>
                    <div className="navigation">
                        <span className="menu_util">
                            {/* 장바구니 버튼 */}
                            <Link to="/cart">
                                <img className = "cartImg" src={"/cart.png"} alt="cart.png" height={30}/>
                            </Link>
                        </span>
                        <span></span>
                        <span>
                            {/* 로그인 버튼 */}
                        {email ? (
                                <Link className = "logButton" to="/" onClick={handelLogout} style = {{textDecoration: "none", color: "black"}}>
                                    {" "}로그아웃
                                    {" "}
                                </Link>
                             ) : (
                                 <Link className = "logButton" to="/login" style = {{textDecoration: "none", color: "black"}}>
                                 {" "}로그인
                                 {" "}
                                 </Link>
                             )}
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default GNB;