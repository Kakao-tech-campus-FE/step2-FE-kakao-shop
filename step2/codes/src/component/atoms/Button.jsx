import '../../styles/atoms/Button.css';

const Button = ({ className, disabled = true, onClick, children} ) => {

    return <button className={`button ${className}`} disabled={disabled} onClick={(e)=>{
        e.preventDefault();
        onClick();
    }}>
        {children}</button>
};

export default Button;