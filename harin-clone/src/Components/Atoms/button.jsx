const Button = ({ onClick, children, className, disabled}) => { // 버튼: 온클릭, 버튼에 적힐 내용, 속성, 활성화 여부
  return (
    <div className="justify-center">
      <button
        className={className}
        onClick = {(e) => {
          e.preventDefault();
          onClick(e);
        }}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;