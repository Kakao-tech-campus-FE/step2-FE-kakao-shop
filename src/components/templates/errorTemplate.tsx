interface ErrorTemplateProps {
  errorMessage: string;
}

export default function ErrorTemplate({
  errorMessage,
}: ErrorTemplateProps) {
  return (
    <main>
      <div className="text-center">
        <h1>페이지를 가져오지 못했습니다.</h1>
        <p>{errorMessage}</p>
      </div>
    </main>
  );
}
