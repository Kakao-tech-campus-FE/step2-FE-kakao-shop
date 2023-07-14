import {useEffect} from "react";

const ErrorSign = ({error}) => {

    useEffect(() => {
        console.log(error)
    }, [error])
    return (

        <div className="error-sign">
            에러사인입니다.
            <div className="error-sign__icon">
                <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="error-sign__message">
                {error}
            </div>
        </div>
    );
}

export default ErrorSign;