import { Link } from "react-router-dom";

interface Props {
  url: string;
  children: React.ReactNode;
}

const Card = ({ url, children }: Props) => {
  return <Link to={url}>{children}</Link>;
};

export default Card;
