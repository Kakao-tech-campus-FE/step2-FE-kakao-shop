import MainProductTemplate from "../templates/MainProductTemplate";
import "../../styles/page.css";
const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <div className={"home-page-content"}>
                    <MainProductTemplate/>
                </div>
            </div>

        </>
    );
}

export default HomePage;