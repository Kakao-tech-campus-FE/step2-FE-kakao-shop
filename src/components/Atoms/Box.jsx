import "../../styles/atoms/box.scss"


const Box = ({children, className=""}) => {
    return (
        <div className={`box ${className}`}>
            {children}
        </div>
    );
}