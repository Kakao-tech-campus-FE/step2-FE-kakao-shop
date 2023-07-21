interface PriceProps {
  price: number;
}

export default function Price({ price }: PriceProps) {
  return (
    <span>
      {price.toLocaleString('ko-KR')}
      {' '}
      원
    </span>
  );
}
