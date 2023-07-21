interface StarProps {
  starCount: number;
}

export default function Star({ starCount }: StarProps) {
  return (
    <span>
      {'★'.repeat(starCount)}
    </span>
  );
}
