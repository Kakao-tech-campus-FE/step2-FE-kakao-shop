import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from './layouts/RootLayout';

// pages
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<RegisterPage />}/>
      <Route path="login" element={<LoginPage />}/>
      <Route path="cart" element={<CartPage />} />
    </Route>
    
  )
)

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;



// import React from 'react';
// import './App.css';
// import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// // pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Faq from './pages/help/Faq';
// import Contact from './pages/help/Contact';

// // layouts
// import RootLayout from './layouts/RootLayout';
// import HelpLayout from './layouts/HelpLayout';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />}/>
//       <Route path="about" element={<About />}/>
//       <Route path="help" element={<HelpLayout />}>
//         <Route path="faq" element={<Faq />}/>
//         <Route path="contact" element={<Contact />}/>
//       </Route>
//     </Route>
//   )
// )

// function App() {
//   return (
//       <RouterProvider router={router} />
//   );
// }

// export default App;
