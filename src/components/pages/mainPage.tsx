import LinkButton from '../atoms/linkButton';

export default function MainPage() {
  return (
    <div className="my-4 text-center">
      <LinkButton href="/login">
        로그인
      </LinkButton>
    </div>
  );
}
