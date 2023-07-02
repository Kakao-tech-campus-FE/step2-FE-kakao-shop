import Badge from "../badge/Badge";
import Card from "../card/Card";
import Radio from "../radio/Radio";
import Toggle from "../togglebtn/ToggleBtn";
import "./mainpage.css";
const MainPage = () => {
  return (
    <div className="main">
      <Card
        url={"/Badge"}
        title="Badge"
        content={<Badge text={"New!"} fontSize={13} />}
      />
      <Card
        url={"/RadioButton"}
        title="Radio Button"
        content={<Radio checked={true} />}
      />
      <Card url={"/ToggleButton"} title="Toggle Button" content={<Toggle />} />
      <Card url={"/Carousel"} title="Carousel" content={"Carousel"} />
      <Card url={"/Toast"} title="Toast" content="Toast" />
      <Card url={"/Checklist"} title="Checklist" content="Checklist" />
    </div>
  );
};
export default MainPage;
