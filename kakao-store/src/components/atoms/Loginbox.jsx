/**
 * 로그인 박스 컴포넌트
 *
 * @param {string} email - 이메일
 * @param {string} password - 비밀번호
 * @param {function} onClick - 로그아웃 버튼 클릭 시 실행할 함수
 * @returns {JSX.Element} - 로그인 박스
 */

const Loginbox = ({ email, password, onClick }) => {
  return (
    <div>
      <div>Email: {email}</div>
      <div>Password: {password}</div>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default Loginbox;
