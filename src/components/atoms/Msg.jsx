import * as Message from '../../styles/atoms/Msg';

const Msg = ({message, className}) => {
    return(
        <Message.LoginError>
            <div className={className}>{message}</div>
        </Message.LoginError>
   );
};

export default Msg;