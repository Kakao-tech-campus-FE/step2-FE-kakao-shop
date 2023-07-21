/**
 * 중요한 정보를 제공하는 회색 배경의 박스
 * @param {string} name - 박스의 왼쪽에 표시되는 이름
 * @param {string} value - 강조할 값
 */
const GrayBox = ({ name, value }) => {
  return (
    <div className="gray-box p-4 flex justify-between items-center bg-gray-50">
      <span className="font-bold text-sm">{name}</span>
      <span className="font-bold text-xl">{value}</span>
    </div>
  );
};

export default GrayBox;
