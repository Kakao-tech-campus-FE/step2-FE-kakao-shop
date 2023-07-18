// import "../../styles/atoms/Loader.css";
import React from "react";
import { Oval } from "react-loader-spinner";

function Loader () {
  return ( 
    <Oval
    color="#ff0000"
    height={100}
    width={100}
    />
  );
};

export default Loader;

// const Loader = () => (
//   <div className="loader loader--style1" title="0">
//     <svg
//       version="1.1"
//       id="loader-1"
//       xmlns="http://www.w3.or/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       width="40px"
//       height="40px"
//       viewBox = "0 0 40 40"
//       enableBackground ="new 0 0 40 40"
//       xmlSpace="preserve"
//       >
//       <path
//         opacity="0.2"
//         fill="#000"
//         d="M20.201,5.169c-8.254,0-14,946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946">
          
//         </path>
//     </svg>
//   </div>
// )