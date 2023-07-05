// 경로에 대해 대해 아직 정의되지 않아 일단 동일 경로로 구현함

// css
import "../styles/Breadcrumb.css";

export default function Breadcrumb({ paths }) {
  return (
    <nav className="breadcrumb-nav">
      {paths.map((path, index) =>
        index === paths.length - 1 ? (
          <span className="breadcrumb-last-path">{path}</span>
        ) : (
          <>
            <span className="breadcrumb-path">
              <a className="breadcrumb-a" href="http://localhost:3000/">
                {path}
              </a>
              {" > "}
            </span>
          </>
        )
      )}
    </nav>
  );
}
