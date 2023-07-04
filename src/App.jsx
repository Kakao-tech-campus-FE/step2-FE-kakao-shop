import GlobalStyle from './styles/GlobalStyle';
import BreadcrumbPage from './pages/BreadcrumbPage';
import CarouselPage from './pages/CarouselPage';
import MainPage from './pages/MainPage';
import ToastPage from './pages/ToastPage';
function App() {
    console.log('App');
    return (
        <>
            <GlobalStyle>
                <BreadcrumbPage />
                <MainPage />
                <CarouselPage />
                <ToastPage />
            </GlobalStyle>
        </>
    );
}

export default App;
