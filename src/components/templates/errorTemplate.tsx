import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ErrorTemplateProps {
  errorMessage: string;
}

export default function ErrorTemplate({
  errorMessage,
}: ErrorTemplateProps) {
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
        <p>{errorMessage}</p>
      </div>
    </main>
  );
}
