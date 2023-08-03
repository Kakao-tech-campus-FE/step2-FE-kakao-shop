import style from './styles/togglebutton.module.css';

// import logo from './logo.svg';
// import './App.css';
// import firstImage from './img/carouselItem1.jpeg';
// import secondImage from './img/carouselItem2.jpeg';
// import thirdImage from './img/carouselItem3.jpeg';


// 위에처럼 week1_compoenents 폴더 안에 만드신 UI 컴포넌트별로 스타일 만들어서 적용해주세요.
// 각각 따로 컴포넌트 분리해서 만들어주세요!
// 그리고 1주차 코드 다 정리하고, 2주차 작업하신 코드는 백업해서 프로젝트에서 지워주시고, 커밋하시면 됩니다.
// Push는 절대 하지 마세요! commit 까지만입니다.
// 그리고 나서 2주차 백업하셨던 코드 다시 붙여놔주시고 2주차 작업하시면 됩니다.
// public html 파일은 건드리지 마세요!

// import { Store } from '@reduxjs/toolkit';


// import components from './component/components';

// // import styled from 'styled-components';
// // import input from 'Input';
// // import Button from 'Button';


// // const ImgSlider = ()=> {
// //   const TOTAL_SLIDES = 3;
// //   const imgLength = 1000;
// //   const IMG = [
// //     'img/img1.png',
// //     'img/img2.png',
// //     'img/img3.png',
// //     'img/img1.png',
// //   ];
// //   const [curruntIdx, setCurrentIdx] = useState(0);
// //   const [count, setCount] = useState(0);
// //   const slideRef = useRef(null);

// //   const nextSlide = () => {
// //     if (curruntIdx >= TOTAL_SLIDES) {
// //       setCurrentIdx(0);
// //     } else {
// //       setCurrentIdx((prev) => prev +1);
// //     }
// //   };
// //   const prevSlide = () => {
// //     if (curruntIdx === 0) {
// //       setCurrentIdx(TOTAL_SLIDES);
// //     } else {
// //       setCurrentIdx((prev) => prev -1);
// //     }
// //   };
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCount((prev) => (prev === TOTAL_SLIDES ? 0 : prev + 1));
// //     }, 3000);
// //     return () => {
// //       clearInterval(timer);
// //     };
// //   }, [count]);
// //   return (
// //     <>
// //       <Container>
// //         <Input type="radio" name="slider" id="slider1" />
// //         <Input type="radio" name="slider" id="slider2" />
// //         <Input type="radio" name="slider" id="slider3" />
// //         <ImageBox ref={slideRef} count={count}>
// //           {IMG.map((ele, idx) => (
// //             <ImageList key={idx}>
// //               <Image src={ele} />
// //             </ImageList>
// //           ))}
// //         </ImageBox>
// //         <Bullets>
// //           <Label for="slider1">&nbsp;</Label>
// //           <Label for="slider2">&nbsp;</Label>
// //           <Label for="slider3">&nbsp;</Label>
// //         </Bullets>
// //       </Container></>
// //   )

// // }

// // 토스트
// const Toast = ({ message }) => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return visible ? <div className="toast">{message}</div> : null;
// };

// // 브래드크럼
// const Breadcrumb = ({ items }) => {
//   return (
//     <nav className="breadcrumb">
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.link ? <a href={item.link}>{item.label}</a> : <span>{item.label}</span>}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// // 캐러셀

// const Carousel = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPreviousSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//   };

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={goToPreviousSlide}>Previous</button>
//       <img src={slides[currentIndex].imageUrl} alt={slides[currentIndex].caption} />
//       <button onClick={goToNextSlide}>Next</button>
//     </div>
//   );
// };


// // 라디오버튼
// const RadioButton = ({ options, selectedOption, onChange }) => {
//   const handleOptionChange = (event) => {
//     const selectedValue = event.target.value;
//     onChange(selectedValue);
//   };

//   return (
//     <div className="radio-button">
//       {options.map((option, index) => (
//         <label key={index}>
//           <input
//             type="radio"
//             value={option.value}
//             checked={selectedOption === option.value}
//             onChange={handleOptionChange}
//           />
//           {option.label}
//         </label>
//       ))}
//     </div>
//   );
// };



// // 토글버튼

// const ToggleButton = ({ value, onToggle }) => {
//   const handleClick = () => {
//     onToggle(!value);
//   };

//   return (
//     <button onClick={handleClick}>
//       {value ? 'On' : 'Off'}
//     </button>
//   );
// };


// // 체크리스트

// const Checklist = ({ items, selectedItems, onToggle }) => {
//   const handleItemToggle = (item) => {
//     const selectedItemSet = new Set(selectedItems);
//     if (selectedItemSet.has(item)) {
//       selectedItemSet.delete(item);
//     } else {
//       selectedItemSet.add(item);
//     }
//     onToggle(Array.from(selectedItemSet));
//   };

//   return (
//     <div className="checklist">
//       {items.map((item, index) => (
//         <label key={index}>
//           <input
//             type="checkbox"
//             checked={selectedItems.includes(item)}
//             onChange={() => handleItemToggle(item)}
//           />
//           {item}
//         </label>
//       ))}
//     </div>
//   );
// };




// // function App() {
// //   document.querySelector('.버튼2').addEventListener('click',function(){
// //     document.querySelector('.container'.style.transform = 'translate(-100vw)');
// //   })


// //   let [상품제목,상품제목변경] = useState(['세제','식재료']);

// //   return (
// //     // index.js에 있는걸 index.html로 넣어주세요(?)라는 뜻(?)
// //     <div className="App">
// //     <div className="container">
// //         <div className="inner1">
// //           <img className="firtstImage" src={firstImage} />
// //         </div>
// //         <div class="inner2">
// //           <img className="secondImage" src={secondImage} />
// //         </div>
// //         <div class="inner3">
// //           <img className="thirdImage" src={thirdImage} />
// //         </div>
// //         </div>
// //     <div className="list">
// //       <h3> { 상품제목 [0]} </h3>
// //     </div>
        
// //      </div>
     
// //   );
  
// // }

// class App extends React.Component{
//   render(){
//     return(
//       <div className="App">
//         <Toast></Toast>
//         <Breadcrumb></Breadcrumb>
//         <Carousel></Carousel>
//         <RadioButton></RadioButton>
//         <ToggleButton></ToggleButton>
//         <Checklist></Checklist>
//       </div>
//     );
//   }
// }

// export default App;

// // export default ImgSlider;


// function App() {
//   document.querySelector('.버튼2').addEventListener('click',function(){
//     document.querySelector('.container'.style.transform = 'translate(-100vw)');
//   })


//   let [상품제목,상품제목변경] = useState(['세제','식재료']);

//   return (
//     // index.js에 있는걸 index.html로 넣어주세요(?)라는 뜻(?)
//     <div className="App">
//     <div className="container">
//         <div className="inner1">
//           <img className="firtstImage" src={firstImage} />
//         </div>
//         <div class="inner2">
//           <img className="secondImage" src={secondImage} />
//         </div>
//         <div class="inner3">
//           <img className="thirdImage" src={thirdImage} />
//         </div>
//         </div>
//     <div className="list">
//       <h3> { 상품제목 [0]} </h3>
//     </div>
        
//      </div>
     
//   );
  
// }

// import { Toast, Breadcrumb, Carousel, RadioButton, ToggleButton, Checklist} from './components/UIComponents';

// class App extends React.Component{
//   render(){
//     return(
//       <div className="App">
//         <Toast></Toast>
//         <Breadcrumb></Breadcrumb>
//         <Carousel></Carousel>
//         <RadioButton></RadioButton>
//         <ToggleButton></ToggleButton>
//         <Checklist></Checklist>
//       </div>
//     );
//   }
// }


const App1 = () => {
  // Toast
  const [toastMessage, setToastMessage] = useState('');

  const showToast = () => {
    setToastMessage('까꿍');
  };

  // Breadcrumb
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'ShopCart' }
  ];


  const images = [firstImage,secondImage,thirdImage];

  // Carousel
  // const carouselSlides = [
  //       <div className="container">
  //       <div className="inner1">
  //         <img className="firtstImage" src={firstImage} alt="firstImage" class="firstImage" />
  //       </div>
  //       <div class="inner2">
  //         <img className="secondImage" src={secondImage} alt="secondImage" class="secondImage" />
  //       </div>
  //       <div class="inner3">
  //         <img className="thirdImage" src={thirdImage} alt="thirdImage" class="thirdImage" />
  //       </div>
  //       </div>
  //   ,{ imageUrl: { firstImage }, caption: 'Slide 1' },
  //   { imageUrl: { secondImage }, caption: 'Slide 2' },
  //   { imageUrl: { thirdImage }, caption: 'Slide 3' }
  // ];

  // RadioButton
  const radioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];
  const [selectedRadioOption, setSelectedRadioOption] = useState('');

  const handleRadioChange = (selectedOption) => {
    setSelectedRadioOption(selectedOption);
  };

  // ToggleButton
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggle = (value) => {
    setToggleValue(value);
  };

  // Checklist
  const checklistItems = ['Item 1', 'Item 2', 'Item 3'];
  const [selectedChecklistItems, setSelectedChecklistItems] = useState([]);

  const handleChecklistToggle = (selectedItems) => {
    setSelectedChecklistItems(selectedItems);
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <Toast message={toastMessage} />

      <Breadcrumb items={breadcrumbItems} />

      
      <div>
        <h1>Carousel</h1>
        <Carousel images={images} />
      </div>

      <RadioButton
        options={radioOptions}
        selectedOption={selectedRadioOption}
        onChange={handleRadioChange}
      />

      <ToggleButton value={toggleValue} onToggle={handleToggle} />

      <Checklist
        items={checklistItems}
        selectedItems={selectedChecklistItems}
        onToggle={handleChecklistToggle}
      />
    </div>
  );
};


const ToggleButton = ({ isOn, setIsOn }) => {
  const handleClick = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <button className={style.button} onClick={handleClick}>
      {isOn ? 'On' : 'Off'}
    </button>
  );
};

const Toast = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return visible ? <div className="toast">{message}</div> : null;
};

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? <a href={item.link}>{item.label}</a> : <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

console.log(images[currentIndex]["firstImage"]);
console.log(currentIndex);
let myimages = [firstImage, secondImage, thirdImage]
console.log(myimages[currentIndex])


  return (
    <div className="carousel">  
      <button className="prev-button" onClick={goToPreviousSlide}>
        Previous
      </button>
      <img className="slide" src={images[currentIndex]} alt="Carousel Slide" />
      <button className="next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

const RadioButton = ({ options, selectedOption, onChange }) => {
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="radio-button">
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

const ToggleButton = ({ value, onToggle }) => {
  const handleClick = () => {
    onToggle(!value);
  };

  return (
    <button onClick={handleClick}>
      {value ? 'On' : 'Off'}
    </button>
  );
};

const Checklist = ({ items, selectedItems, onToggle }) => {
  const handleItemToggle = (item) => {
    const selectedItemSet = new Set(selectedItems);
    if (selectedItemSet.has(item)) {
      selectedItemSet.delete(item);
    } else {
      selectedItemSet.add(item);
    }
    onToggle(Array.from(selectedItemSet));
  };

  return (
    <div className="checklist">
      {items.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => handleItemToggle(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};



export default ToggleButton;
