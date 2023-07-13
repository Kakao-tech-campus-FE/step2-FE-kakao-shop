import "../styles/topButton.css"

const TopButton = () => {
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <div className="scroll_container">
            <button id="top" onClick={scrollToTop} type="button" >↑</button>
        </div>
    );
};

export default TopButton