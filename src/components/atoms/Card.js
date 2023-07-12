import { Link } from "react-router-dom";

// props: to, children
export default function Card({ className = "", ...props }) {
  return <Link className={className} {...props} />;
}
