const Button = ({ className, disabled, onClick, children} ) => {

    return <button className = {className} disabled={disabled} onClick={(e)=>{
        e.preventDefault();
        onClick(e);
    }}>
        {children}</button>
};

export default Button;