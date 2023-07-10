export default function Button({ className = "", onClick, children }) {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}
