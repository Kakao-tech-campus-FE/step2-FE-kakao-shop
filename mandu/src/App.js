import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainLayout from "./components/templates/MainLayout";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/signup" element={<SignUpPage/>}/>
                        <Route element={<MainLayout/>}>
                            <Route path='/' element={<MainPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    );
}

export default App;
