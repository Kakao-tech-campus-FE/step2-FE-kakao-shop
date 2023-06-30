import Badge from "../badge/Badge";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";
import Radio from "../radio/Radio";
import Toggle from "../togglebtn/ToggleBtn";
import "./mainpage.css";
const MainPage = () => {
  return (
    <div className="main">
      <Card url={"/badge"} title="Badge" content={<Badge text={"New!"} />} />
      <Card
        url={"/radio"}
        title="Radio Button"
        content={<Radio checked={true} />}
      />
      <Card url={"/toggle"} title="Toggle Button" content={<Toggle />} />
      <Card url={"/carousel"} title="Carousel" content={"Carousel"} />
      <Card url={"/toast"} title="Toast" content="Toast" />
      <Card url={"/checklist"} title="Checklist" content="Checklist" />
    </div>
  );
};
export default MainPage;
