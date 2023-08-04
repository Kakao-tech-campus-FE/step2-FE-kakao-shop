import Container from '../components/atoms/Container';
import MainProductTemplate from '../components/templates/MainProductTemplate';
import Page from '../components/atoms/Page';

const HomePage = () => {
    return (
        <Page className="flex flex-col w-full justify-center items-center">
            <MainProductTemplate />
        </Page>
    );
};

export default HomePage;
