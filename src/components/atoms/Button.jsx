/**
 * Button component
 * onClick: event handler
 * children: text inside button
 */
export default function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
