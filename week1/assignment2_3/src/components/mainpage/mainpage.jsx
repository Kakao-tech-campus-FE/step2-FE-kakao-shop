import Card from "../card/Card";
import "./mainpage.css";
const MainPage = () => {
  return (
    <div className="main">
      <Card url={"/badge"} title="Badge" />
      <Card url={"/radio"} title="Radio Button" />
      <Card url={"/toggle"} title="Toggle Button" />
      <Card url={"/carousel"} title="Carousel" />
      <Card url={"/toast"} title="Toast" />
      <Card url={"/checklist"} title="Checklist" />
    </div>
  );
};
export default MainPage;
