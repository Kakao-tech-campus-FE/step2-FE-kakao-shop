import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useCallback } from 'react';

interface RatingProps {
  maxScore: number;
  currentScore: number;
}

export default function Rating({
  maxScore,
  currentScore,
}: RatingProps) {
  const RenderRating = useCallback(() => {
    const list = [];

    for (let i = 1; i <= maxScore; i += 1) {
      const iconDefinition = currentScore >= i
        ? icon({ name: 'star', style: 'solid' })
        : icon({ name: 'star', style: 'regular' });

      list.push(<FontAwesomeIcon
        key={i}
        icon={iconDefinition}
        color="#4684e9"
      />);
    }

    return <div>{list}</div>;
  }, [currentScore, maxScore]);

  return (
    <RenderRating />
  );
}
