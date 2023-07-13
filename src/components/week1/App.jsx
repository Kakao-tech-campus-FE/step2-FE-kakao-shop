import React, { useState } from 'react';
import Toast from './components/Toast';
import Slider from './components/Slider';
import Radio from './components/Radio';
import Toggle from './components/Toggle';
import CheckBox from './components/CheckBox';
import { Routes, Route} from 'react-router-dom';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Breadcrumbs from './components/Breadcrumbs';
import * as app from "./styles/App";

const App = () => {
  const [toast, setToast] = useState(false);

  const handleToastClick = () => {
    setToast(true);
  };

  return (
    <div>
      <app.Head>** 카카오테크캠퍼스 2단계 1주차 과제 **</app.Head>
      <app.Container>
        <app.List onClick={handleToastClick}>
          toast
          {toast && (
            <Toast
              setToast={setToast}
              text="카카오 테크 캠퍼스 과제1 UI 컴포넌트 Toast"
            />
          )}
        </app.List>
        <app.List><app.Nav to="/home">breadCrumbs</app.Nav></app.List>
        <app.List><app.Nav to="/carousel">carousel</app.Nav></app.List>
        <app.List><app.Nav to="/radio">radioButton</app.Nav></app.List>
        <app.List><app.Nav to="/toggle">toggleButton</app.Nav></app.List>
        <app.List><app.Nav to="checklist">checkList</app.Nav></app.List>
      </app.Container>
        <Routes>
          <Route path="/home" element={<Breadcrumbs />} />
          <Route path="/home/level1" element={<Level1 />} />
          <Route path="/home/level1/level2" element={<Level2 />} />
          <Route path="/carousel" element={<Slider />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="checklist" element={<CheckBox />} />
        </Routes>
    </div>
  );
}

export default App;
