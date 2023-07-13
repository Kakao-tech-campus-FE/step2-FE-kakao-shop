import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import BreadcrumbEx from "./pages/BreadcrumbEx";
import BreadcrumbExTestA from "./pages/BreadcrumbEx-Test/BreadcrumbExTestA";
import BreadcrumbExTestB from "./pages/BreadcrumbEx-Test/BreadcrumbExTestB";
import BreadcrumbExTestBz from "./pages/BreadcrumbEx-Test/BreadcrumbExTestBz";
import CarouselEx from "./pages/CarouselEx";
import ChecklistEx from "./pages/ChecklistEx";
import RadioButtonEx from "./pages/RadioButtonEx";
import ToastEx from "./pages/ToastEx";
import ToggleButtonEx from "./pages/ToggleButtonEx";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route element={<Layout />}>
                      <Route path = "/" element={<Main />}></Route>
                      <Route path = "/BreadcrumbEx" element={<BreadcrumbEx />}></Route>
                      <Route path = "/BreadcrumbEx/A" element={<BreadcrumbExTestA />}></Route>
                      <Route path = "/BreadcrumbEx/B" element={<BreadcrumbExTestB />}></Route>
                      <Route path = "/BreadcrumbEx/B/z" element={<BreadcrumbExTestBz />}></Route>
                      <Route path = "/CarouselEx" element={<CarouselEx />}></Route>
                      <Route path = "/ChecklistEx" element={<ChecklistEx />}></Route>
                      <Route path = "/RadioButtonEx" element={<RadioButtonEx />}></Route>
                      <Route path = "/ToastEx" element={<ToastEx />}></Route>
                      <Route path = "/ToggleButtonEx" element={<ToggleButtonEx />}></Route>
                      <Route path = "*" element={<NotFound />}></Route>
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
