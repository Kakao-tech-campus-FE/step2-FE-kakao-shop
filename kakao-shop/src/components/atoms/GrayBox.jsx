/**
 * 중요한 정보를 제공하는 박스
 * @todo 세부 스타일을 지정하지 않고 props로 받아서 처리하도록 수정, 컴포넌트 이름 변경 필요
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
