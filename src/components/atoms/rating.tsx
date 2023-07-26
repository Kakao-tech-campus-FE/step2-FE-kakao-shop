import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useRef } from 'react';

interface RatingProps {
  maxScore: number;
  currentScore: number;
}

export default function Rating({
  maxScore,
  currentScore,
}: RatingProps) {
  const starRef = useRef<{ key: number; isFull: boolean; }[] | null>(null);

  if (starRef.current === null) {
    starRef.current = [];
    for (let i = 1; i <= maxScore; i += 1) {
      starRef.current.push({ key: i, isFull: currentScore >= i });
    }
  }

  return (
    <div>
      {starRef.current?.map(({ key, isFull }) => (isFull
        ? (
          <FontAwesomeIcon
            key={key}
            icon={icon({ name: 'star', style: 'solid' })}
            color="#4684e9"
          />
        )
        : (
          <FontAwesomeIcon
            key={key}
            icon={icon({ name: 'star', style: 'regular' })}
            color="#4684e9"
          />
        )))}
    </div>
  );
}
