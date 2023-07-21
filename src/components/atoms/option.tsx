import { Children, useState } from 'react';

interface OptionProps {
  children: React.ReactNode;
  optionDescription: string;
}

export default function Option({ children, optionDescription }:OptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-stone-300">
      <button
        className="w-full p-2 text-left"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {optionDescription}
      </button>
      {isExpanded ? (
        <ul role="listbox" className="flex flex-col">
          {Children.map(children, (child) => (
            <li>
              {child}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
