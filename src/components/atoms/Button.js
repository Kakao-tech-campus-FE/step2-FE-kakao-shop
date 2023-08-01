// className(CSS 적용 위한 클래스명), onClick(클릭 이벤트 함수)
// props: children(자식노드(버튼 글씨))
export default function Button({ className = null, onClick, ...props }) {
  const handleButtonClick = (event) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button className={className} onClick={handleButtonClick} {...props} />
  );
}
