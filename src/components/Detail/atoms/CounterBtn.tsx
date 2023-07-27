function CounterBtn({ type, disabled = false, onClick }: { type: '+' | '-'; disabled?: boolean; onClick: () => void }) {
  return (
    <button className="bg-gray-100 p-1 rounded-mg flex-1 rounded-lg" type="button" disabled={disabled} onClick={onClick}>
      {type}
    </button>
  );
}

export default CounterBtn;
