import '../../styles/Atoms/Container.css';

const Container = ({ children, className }) => {
    return <div className={`container ${className}`}>{children}</div>
}

export default Container;