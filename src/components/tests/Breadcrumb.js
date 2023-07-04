// css
import "../../styles/tests/Breadcrumb.css";

export default function Breadcrumb({ paths }) {
  return (
    <nav className="breadcrumb-nav">
      {paths.map((path, index) =>
        index === paths.length - 1 ? (
          <span key={index} className="breadcrumb-last-path">
            {path}
          </span>
        ) : (
          <span key={index} className="breadcrumb-path">
            <a className="breadcrumb-a" href="http://localhost:3000/">
              {path}
            </a>
            {" > "}
          </span>
        )
      )}
    </nav>
  );
}
