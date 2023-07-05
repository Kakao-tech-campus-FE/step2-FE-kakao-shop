import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Main Page</h1>
            <button className="bg-emerald-400 m-2 p-2 rounded" onClick={()=> navigate('/login')}>Go to Login Page</button>
            <button className="bg-emerald-400 m-2 p-2 rounded" onClick={()=> navigate('/signup')}>Go to Sign Up Page</button>
        </div>
    );
}

export default MainPage;