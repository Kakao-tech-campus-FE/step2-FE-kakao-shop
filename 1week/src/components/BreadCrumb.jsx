// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './BreadCrumb.css';

// const BreadCrumb = () => {

//   const [sections = [
//     { title: 'Home', link: '/' },
//     { title: 'Login', link: './login.html' }
//   ], setSections] = useState(" ");

//   const handleSectionClick = (index) => {
//     setSections((prevSections) => prevSections.slice(0, index + 1));
//   };

//   return (
//     <div className="ui breadcrumb">
//       {sections.map((section, index) => (
//       <React.Fragment key={index}>
//         {index > 0 && <div className="divider"> / </div>}
//         <Link 
//         className="section" 
//         href={section.link} 
//         onClick={(e) => 
//         {e.preventDefault();
//         handleSectionClick(index);}}
//         >{section.title}
//         </Link>
//         </React.Fragment>))}
//         </div>
//   );
// };

// export default BreadCrumb;

