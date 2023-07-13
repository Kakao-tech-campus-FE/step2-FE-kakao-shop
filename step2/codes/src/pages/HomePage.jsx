import Title from "../component/atoms/Title";
import Container from "../component/atoms/Container";
import HomeForm from "../component/organisms/HomeForm";
// import Breadcrumb from "../component/molecules/ui/breadcrumb/breadcrumb";

const Homepage = ({className}) => {

    return <Container>
        <HomeForm isLoggedIn={false} className={className}/>
    </Container>
};


export default Homepage;