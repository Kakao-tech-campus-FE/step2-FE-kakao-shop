import "./Header.css";

const Header = () => {
  return (
    <div
      style={{ display: "flex", backgroundColor: "#7f8a93", padding: "8px" }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <button className="menu-btn">
        <span className="material-symbols-rounded">menu</span>
      </button>
      <b style={{ margin: "auto", fontSize: "32px" }}>Header Title</b>
    </div>
  );
};
export default Header;
