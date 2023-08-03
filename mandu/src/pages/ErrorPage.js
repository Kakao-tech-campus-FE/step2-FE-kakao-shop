import {Link} from "react-router-dom";
import {convertUrl} from "../const";

const ErrorPage = ({error}) => {
    const {status, message} = error
    return (
        <div className="mx-auto my-40">
            <h1 className="text-6xl font-bold text-center">{status}</h1>
            <h2 className="text-3xl text-center">{message}</h2>
            <div className="text-center m-3">
                <Link to={convertUrl("/")} className="text-2xl bg-gray-300 p-3 inline-block rounded">메인으로 돌아가기</Link>
            </div>
        </div>
    )
}

export default ErrorPage;