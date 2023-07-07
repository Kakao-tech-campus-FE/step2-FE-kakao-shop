const Header = ({ children, onClick, text }) => {
  return (
    <div>
      <header>
        {children}
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          {text}
        </button>
      </header>
    </div>
  );
};

export default Header;
