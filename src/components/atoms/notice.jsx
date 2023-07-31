import { SwiperComponent } from "./Swiper.jsx";
import "./notice.css";

const Notice = () => {
  return (
    <div className="notice ">
      <div className="notice-line ">
        <div className="inner flex ">
          <h2 className="today">오늘의딜</h2>
          <SwiperComponent className="swiper" />
          <h2>전체톡딜</h2>
        </div>
      </div>
    </div>
  );
};

export default Notice;
