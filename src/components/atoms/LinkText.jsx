import * as link from '../../styles/atoms/Link';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const LinkText = ({ text, to, className, onClick }) => {
  return (
    <span>
      <link.Text
        to={staticServerUrl + to}
        className={className}
        onClick={text === '로그인' || '로그아웃' ? onClick : null}
      >
        {text}
      </link.Text>
    </span>
  );
};

export default LinkText;
