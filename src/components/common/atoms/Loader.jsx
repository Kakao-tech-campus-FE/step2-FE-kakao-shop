import "../../../styles/atoms/Loader.css";

/**
 * Loader Component: 코드펜에서 가져온 코드
 * @returns Loader UI
 */
export default function Loader() {
  return (
    <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
}
