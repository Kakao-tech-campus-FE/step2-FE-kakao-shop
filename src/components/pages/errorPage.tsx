import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  errorMessage?: string;
  resetError: () => void;
}

export default function ErrorPage({
  errorMessage,
  resetError,
}: ErrorPageProps) {
  return (
    <main>
      <div className="text-center">
        <div className="py-4">
          <FontAwesomeIcon
            icon={icon({ name: 'triangle-exclamation', style: 'solid' })}
            size="2xl"
          />
        </div>
        <h1>페이지를 가져오지 못했습니다.</h1>
        {errorMessage ? <p>{errorMessage}</p> : null}
      </div>
      <div className="my-4 text-center font-bold text-indigo-400">
        <Link
          to="/"
          onClick={resetError}
        >
          메인 페이지로
        </Link>
      </div>
    </main>
  );
}
