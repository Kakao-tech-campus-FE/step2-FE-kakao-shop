import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Toast from "./Toast";


function App() {
  return (
    <>
      <RToast></RToast>
      <Toast></Toast>
      <div style ={{backgroundColor:"orange"}}>Breadcrumbs
      <RBreadCrumbs></RBreadCrumbs>
      </div>
      <RCarousel></RCarousel>
      <div style ={{backgroundColor:"pink"}}>RadioButton
      <RRadioButton></RRadioButton>
      </div>
      <div style ={{backgroundColor:"yellow"}}>ToggleBtn
      <RToggleBtn></RToggleBtn>
      </div>
      <div>CheckList
      <RCheckList></RCheckList>
      </div>
    </>
  );
}

function RToast() {
  const toastTriggerRef = useRef(null);
  const toastLiveExampleRef = useRef(null);

  useEffect(() => {
    if (toastTriggerRef.current) {
      toastTriggerRef.current.addEventListener("click", () => {
        const toast = new window.bootstrap.Toast(toastLiveExampleRef.current);
        toast.show();
      });
    }
  }, []);

  return (
    <>
      <button
        style={{ margin: "10px" }}
        type="button"
        className="btn btn-primary"
        id="liveToastBtn"
        ref={toastTriggerRef}
      >
        Show live toast
      </button>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastLiveExampleRef}
        >
          <div className="toast-header">
            <img
              style={{ maxWidth: "100px" }}
              src="https://www.rappler.com/tachyon/r3-assets/98674DD6B856447EA322CAE13AE700D3/img/9854BF2203984F4AA358BDA162B3A127/bomb_red_chuck_angry_birds-scaled.jpg?resize=2560%2C1440&zoom=0.5"
              className="rounded me-2"
              alt="..."
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  );
}
function RBreadCrumbs() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </>
  );
}
function RCarousel() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTQ5ODg4NjQ0MF5BMl5BanBnXkFtZTgwOTAwODQ2MzE@._V1_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MxNp21bZYXBEsvG_vI8pYlvQBH-ciiKJlA&usqp=CAU"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://static01.nyt.com/images/2019/08/14/arts/angry1/merlin_159167469_b9de8c18-c81f-4a37-b6f1-096426aa5324-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
function RRadioButton() {
  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </>
  );
}
function RToggleBtn() {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed((prevState) => !prevState);
  };

  return (
    <button
      style={{ margin: "10px" }}
      type="button"
      className={`btn ${isPressed ? "btn-primary active" : "btn-secondary"}`}
      onClick={handleClick}
    >
      {isPressed ? "Pressed" : "Not Pressed"}
    </button>
  );
}
function RCheckList() {
  return (
    <>
      <ul class="list-group" style={{maxWidth:'500px', margin:"10px"}}>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          First checkbox
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          Second checkbox
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          Third checkbox
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          Fourth checkbox
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          Fifth checkbox
        </li>
      </ul>
    </>
  );
}


export default App;
