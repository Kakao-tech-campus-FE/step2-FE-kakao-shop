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
  const renderRating = useCallback(() => {
    const list = [];

    for (let i = 1; i <= maxScore; i += 1) {
      if (currentScore >= i) {
        list.push(<FontAwesomeIcon
          key={i}
          icon={icon({ name: 'star', style: 'solid' })}
          color="#4684e9"
        />);
      } else {
        list.push(<FontAwesomeIcon
          key={i}
          icon={icon({ name: 'star', style: 'regular' })}
          color="#4684e9"
        />);
      }
    }

    return list;
  }, [currentScore, maxScore]);

  return (
    <div>
      {renderRating()}
    </div>
  );
}
