interface emailProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isWrong?: boolean;
  wrongMessage?: string;
}

interface nameProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface passwordProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
  isWrong?: boolean;
  wrongMessage?: string;
}

interface passwordConfirmProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isWrong?: boolean;
  wrongMessage?: string;
}
interface SignUpProps {
  emailProps: emailProps;
  nameProps: nameProps;
  passwordProps: passwordProps;
  passwordConfirmProps: passwordConfirmProps;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

type SignInProps = Omit<SignUpProps, "nameProps" | "passwordConfirmProps">;
