import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux"


function GNB() {
    const [isLogin, setIsLogin] = useSelector((state) => state.user.id)

    useEffect(() => {
        if (localStorage.getItem("token") != null) setIsLogin(true);
    }, [isLogin]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("정상적으로 로그아웃 되었습니다.")
    };

    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img src={"/logokakao.png"} alt="logoKakao.png" height={30} />
                </Link>
                <nav>
                    <div className="navigation">
                        <span>
                            {/* 장바구니 버튼 */}
                            <Link to="/cart">
                                <img src={"/cart.png"} alt="cart.png" height={30} />
                            </Link>
                        </span>
                        <span></span>
                        <span>
                            {isLogin ? (
                                <Link
                                    to='/login'
                                    onClick={handleLogout}
                                    style={{textDecoration: "none", color: 'black'}}
                                >
                                    {" "}
                                    로그아웃{" "}
                                </Link>
                            ) : (
                                <Link
                                    to="/login"
                                    style={{ textDecoration: "none", color: "black"}}
                                >
                                    {" "}
                                    로그인{" "}
                                </Link>
                            )}
                        </span>
                    </div>   
                </nav>
            </div>
        </header>
    )
}
export default GNB