import { useState } from "react"
import CarouselItem from "../atoms/CarouselItem"
import '../styles/Carousel.css'
import { useNavigate } from 'react-router-dom'

const Carousel = () => {
	const staticServerUrl = process.env.REACT_APP_PATH || "";
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  const items = [
    {
      title: 'InCorrect Slide',
      description: 'There\'s nothing... Next Slide!!',
      bgColor: "orange"
    },
    {
      title: 'Correct Slide',
      description: 'Click here!!',
      bgColor: "lightBlue"
    },
    {
      title: 'InCorrect Slide',
      description: 'There\'s nothing... Previous Slide!!',
      bgColor: "lightGreen"
    }
  ]

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= items.length) {
      newIndex = items.length -1
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className="wrapper">
      <div className="carousel">
        <div 
          className="inner" 
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            if (item.title === 'Correct Slide') {
              return <>
                <CarouselItem 
                  item={item} 
                  width={"100%"} 
                  onClick={() => navigate(staticServerUrl + '/home/subpage')}
                  cursor={'cursor'}
                />
              </>
            }
            return <CarouselItem item={item} width={"100%"} />
          })}
        </div>
        <div className="buttons">
          <button 
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex-1)
            }}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
          </button>
          <div className="indicators">
            {items.map((item, index) => {
              return (
                <button 
                  className="indicator-buttons"
                  onClick={() => {
                    updateIndex(index)
                  }}
                >
                  <span 
                    className={`material-symbols-outlined ${
                      index === activeIndex 
                      ? "indicator-symbol-active" 
                      : "indicator-symbol"
                    }`}
                  >radio_button_unchecked</span>
                </button>
              )
            })}
          </div>
          <button 
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex+1)
            }}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel