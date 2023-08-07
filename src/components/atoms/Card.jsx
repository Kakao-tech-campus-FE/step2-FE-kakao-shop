import { Link } from 'react-router-dom';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const Card = ({ to, children, className }) => {
  return (
    <Link to={staticServerUrl + to} className={className}>
      {children}
    </Link>
  );
};

export default Card;
