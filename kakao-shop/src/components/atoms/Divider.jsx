/**
 * 수직 또는 수평 구분선 컴포넌트
 *
 * @param {"horizontal" | "vertical"} type - 구분선의 방향 종류 (가로선인지 세로선인지 구분)
 * @returns {JSX.Element} - 구분선 컴포넌트의 JSX 요소
 */
export default function Divider({ type = 'horizontal' }) {
  const typeObj = {
    horizontal: 'w-full h-px',
    vertical: 'w-px h-full',
  };

  return <div className={`bg-gray-200 ${typeObj[type]}`}></div>;
}
