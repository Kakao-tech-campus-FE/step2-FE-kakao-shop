import Container from "../components/atoms/Container";
import Header from "../components/organisms/Header";

const MainPage = () => {
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-itmes-center">
            <Header />
        </Container>
    );
};

export default MainPage;
