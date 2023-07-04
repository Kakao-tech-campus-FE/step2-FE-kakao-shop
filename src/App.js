
  
import ToggleButton from './components/toggleButton/Toggle';
import Toast from './components/toast/toast';
import RadioButton from './components/radioButton/RadioButton';
import CheckList from './components/checkList/CheckList';
import Carousel from './components/carousel/Carousel';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
function App() {
  const handleOptionChange = (option) => {
    console.log('Selected Option:', option);
  };
  const checkListChange = (selectedOptions) => {
    console.log('Selected Options:', selectedOptions);
  };
  const images = [
    'https://images.services.kitchenstories.io/UkPY4evrq98iG2kbu8c1JlVXj9Q=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2798-photo-final-1.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/healthy-recipes-marquee-1577978180.png?crop=0.888xw:0.674xh;0.0849xw,0.122xh&resize=1200:*',
    'https://www.realsimple.com/thmb/fMh6cWLYxsddO3BuSJXanCk1gpI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg',
  ];
  const paths = ['Breakfast', 'Lunch', 'Dinner'];

  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };


  return (
    <div className='App'>
      <h1>1주차 과제</h1>
      <div>
      <h2>ToggleButton</h2>
      <ToggleButton />
      <h2>RadioButton</h2>
      <RadioButton
        options={['Breakfast', 'Lunch', 'Dinner']}
        onChange={handleOptionChange}
      />
      <h2>CheckList</h2>
      <CheckList
        options={['Breakfast', 'Lunch', 'Dinner']}
        onChange={checkListChange}
      />
      <h2>Carousel</h2>
      <Carousel images={images} />
      </div>
      <h2>Breadcrumb</h2>
      <Breadcrumb paths={paths} />
      <h2>Toast</h2>
      <button onClick={handleShowToast}>Show Toast</button>
      {showToast && (
        <Toast message="HO-!" duration={3000} onClose={handleCloseToast} />
      )}
    </div>
  );
}

export default App;