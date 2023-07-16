import img1 from '../../assets/carouselItem1.jpeg';
import img2 from '../../assets/carouselItem2.jpeg';
import img3 from '../../assets/carouselItem3.jpeg';

 const Carousel = () => {
  return(
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="캐러셀1" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="캐러셀2" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="캐러셀3" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>

  );

};

export default Carousel;