const ErrorSign = ({ error }) => (
    <div className="error-sign">
        <div className="error-sign__icon">
            <i className="fas fa-exclamation-triangle"></i>
        </div>
        <div className="error-sign__message">
            {error}
        </div>
    </div>
)

export default ErrorSign;