import { Link } from "react-router-dom"
import "../../styles/atoms/GNB.css"
import { useDispatch, useSelector } from "react-redux"
import { setToken } from "../../store/slices/userSlice"

function GNB() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch() //reducer 호출할 때 먼저 dispatch 선언

  const handleLogout = () => {
    localStorage.removeItem("token")
    dispatch(setToken(null))
    alert("정상적으로 로그아웃되었습니다.")
  }

  return (
    <header className="header"> 
      <div className="contents">
        <Link to="/">
          <img src={"logokakao.png"} alt="장바구니 쇼핑 로고" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img src={"/cart.png"} alt="장바구니 버튼" height={30} />
              </Link>
            </span>
            <span>|</span>
            <span>
              {/* 로그인 버튼 */}
              {token ? (
                <Link
                  to="/login"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그아웃{" "}
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
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
