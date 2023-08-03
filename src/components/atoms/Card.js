import { Link } from "react-router-dom";

// className(CSS 적용 위한 클래스명)
// props: to(이동 경로), children(자식노드)
export default function Card({ className = null, ...props }) {
  return <Link className={className} {...props} />;
}
