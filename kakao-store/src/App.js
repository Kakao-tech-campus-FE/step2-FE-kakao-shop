import './styles/App.css';
import { useState } from "react";

import ToggleButton from './components/togglebutton/ToggleButton';
import Checklist from './components/checklist/Checklist';
import RadioButton from './components/radiobutton/RadioButton';
import Carousel from './components/carousel/Carousel';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Toast from './components/toast/Toast';

import imgfile1 from './images/image1.png';
import imgfile2 from './images/image2.png';
import imgfile3 from './images/image3.png';

function App() {
  const [activeLabel, setActiveLabel] = useState('toggle'); // Track the active label

  const handleLabelClick = (label) => {
    setActiveLabel(label);
  };

  // Toggle Button
  const ToggleButtonSection = () => {
    const handleToggle = (isToggled) => {
      console.log('Toggle State:', isToggled);
      // Perform additional actions based on the toggle state
    };

    return (
      <div>
        <h1>Toggle Button</h1>
        <ToggleButton label="왕왕토글!" onToggle={handleToggle} />
      </div>
    );
  };

  // Checklist
  const ChecklistSection = () => {
    const handleChecklistChange = (checkedItems) => {
      console.log('Checked Items:', checkedItems);
      // Perform additional actions based on the checked items
    };

    return (
      <div>
        <h1>Checklist</h1>
        <Checklist
          items={['Item 1', 'Item 2', 'Item 3']}
          onChange={handleChecklistChange}
        />
      </div>
    );
  };

  // Radio Button
  const RadioButtonSection = () => {
    const radioOptions = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    const handleOptionChange = (option) => {
      console.log('Selected Option:', option);
      // Perform additional actions based on the selected option
    };

    return (
      <div>
        <h1>RadioButton</h1>
        <RadioButton options={radioOptions} onChange={handleOptionChange} />
        {/* Other content */}
      </div>
    );
  };

  // Carousel
  const CarouselSection = () => {
    const carouselImages = [
      imgfile1,
      imgfile2,
      imgfile3,
    ];

    return (
      <div>
        <h1>Carousel</h1>
        <Carousel images={carouselImages} />
        {/* Other content */}
      </div>
    );
  };

  // Breadcrumbs
  const BreadcrumbsSection = () => {
    const breadcrumbPaths = [
      { label: 'Toggle Button', id: 'toggle' },
      { label: 'Checklist', id: 'checklist' },
      { label: 'Radio', id: 'radio' },
      { label: 'Carousel', id: 'carousel' },
      { label: 'Toast', id: 'toast' },
    ];

    return (
      <div className="breadcrumbs">
        {breadcrumbPaths.map((breadcrumb) => (
          <span
            key={breadcrumb.id}
            className={activeLabel === breadcrumb.id ? 'active' : ''}
            onClick={() => handleLabelClick(breadcrumb.id)}
          >
            {breadcrumb.label}
          </span>
        ))}
      </div>
    );
  };

  // Toast Section
  const ToastSection = () => {
    const [showToast, setShowToast] = useState(false);

    const handleButtonClick = () => {
      setShowToast(true);
    };

    const handleCloseToast = () => {
      setShowToast(false);
    };

    return (
      <div>
        <h1>Toast</h1>
        <button onClick={handleButtonClick}>Show Toast</button>
        {showToast && (
          <Toast message="뿅!" duration={30000} onClose={handleCloseToast} />
        )}
      </div>
    );
  };

  return (
    <div className='App'>
      <BreadcrumbsSection />

      {activeLabel === 'toggle' && <ToggleButtonSection />}
      {activeLabel === 'checklist' && <ChecklistSection />}
      {activeLabel === 'radio' && <RadioButtonSection />}
      {activeLabel === 'carousel' && <CarouselSection />}
      {activeLabel === 'toast' && <ToastSection />}
    </div>
  );
}

export default App;
