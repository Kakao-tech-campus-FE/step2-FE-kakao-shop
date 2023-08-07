const CounterBtn = ({ children, onClick }) => {
  return (
    <button className="border w-6 mx-2" onClick={onClick}>
      {children}
    </button>
  );
};

export default CounterBtn;
