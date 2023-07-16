/**
 * 에러 메시지 박스 컴포넌트
 *
 * @param {string} errors - 에러 메시지
 * @returns {JSX.Element} - 에러 메시지 박스
 */

const Errorbox = ({ errors }) => {
  return (
    <div className="box mb-4 rounded-md  bg-white p-1">
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};

export default Errorbox;
