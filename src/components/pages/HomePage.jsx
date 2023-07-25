import MainProductTemplate from "../templates/MainProductTemplate";
import "../../styles/pages/page.css";
const HomePage = () => {
    return (
        <>
            <div className="home-page page">
                <div className={"home-page-content"}>
                    <MainProductTemplate/>
                </div>
            </div>

        </>
    );
}

export default HomePage;