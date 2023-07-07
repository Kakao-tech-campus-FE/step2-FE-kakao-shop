import '../../styles/Atoms/Button.css'

const Button = ({ onClick, children }) => {
    return (
        <button className="button"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </button>
    )
}

export default Button;