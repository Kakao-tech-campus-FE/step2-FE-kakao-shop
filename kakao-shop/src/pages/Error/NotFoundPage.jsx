import { useNavigate } from 'react-router-dom';

/**
 * 404 Not Found 페이지
 */
export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-20">
      <h1 className="text-2xl font-extrabold">404 NOT FOUND</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <button className="mt-5 bg-gray-100 px-5 py-2 rounded-md" onClick={() => navigate(-1)}>
        뒤로가기
      </button>
    </div>
  );
}
