import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/Registerpage"
import HomePage from "./pages/HomePage"

function App() {
  const [user, setUser] = useState(null) // 사용자 정보 상태

  // 로그인 성공 시 사용자 정보 설정
  const handleLoginSuccess = (userData) => {
    setUser(userData)
  };

  // 회원가입 성공 시 사용자 정보 설정
  const handleRegisterSuccess = (userData) => {
    setUser(userData)
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/signup"
            element={<RegisterPage onRegisterSuccess={handleRegisterSuccess} />}
          />
          <Route
            path="/"
            element={<HomePage user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
