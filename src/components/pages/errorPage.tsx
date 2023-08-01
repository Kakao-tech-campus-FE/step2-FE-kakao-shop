import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ErrorPageProps {
  errorMessage?: string;
}

export default function ErrorPage({
  errorMessage,
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
    </main>
  );
}
