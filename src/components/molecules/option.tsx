import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Children, useState } from 'react';

interface OptionProps {
  children: React.ReactNode;
  optionDescription: string;
}

export default function Option({ children, optionDescription }:OptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <button
        className={`flex w-full items-center justify-between rounded border border-stone-300 px-3 py-2 ${isExpanded ? 'rounded-b-none border-b-0' : ''}`}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div>
          {optionDescription}
        </div>
        {isExpanded
          ? <FontAwesomeIcon icon={icon({ name: 'angle-up', style: 'solid' })} />
          : <FontAwesomeIcon icon={icon({ name: 'angle-down', style: 'solid' })} />}
      </button>
      {isExpanded ? (
        <ul role="listbox" className="absolute z-30 flex w-full flex-col bg-white">
          {Children.map(children, (child, index) => (
            <li className={`${Children.count(children) - 1 === index ? 'rounded-b border-b' : ''} border-x border-stone-300`}>
              {child}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
