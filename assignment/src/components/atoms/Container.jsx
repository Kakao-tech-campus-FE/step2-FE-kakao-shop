import './../../styles/atoms/Container.css'

// Container
// Props : children : 담을 내용
const Container = ({ children }) => {
    return (
        <div className="container"> {children} </div>
    );
};

export default Container;