import './App.css'
import BreadcrumbPage from "./pages/BreadcrumbPage"
import CarouselPage from './pages/CarouselPage';
import MainPage from './pages/MainPage';
import ToastPage from './pages/ToastPage';
function App() {
  console.log("App");
  return(<>
    <BreadcrumbPage />
    <MainPage />
    <CarouselPage />
    <ToastPage />
  </>)
}

export default App
