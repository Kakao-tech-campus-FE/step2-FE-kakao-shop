import '../../styles/atoms/Button.css';

const Button = ({ className, disabled = false, onClick, children} ) => {

    return <button className={`button ${className}`} disabled={disabled} onClick={(e)=>{
        e.preventDefault();
        onClick(e);
    }}>
        {children}</button>
};

export default Button;