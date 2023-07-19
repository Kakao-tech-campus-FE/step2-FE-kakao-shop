import React from 'react';
import '../../styles/atoms/Loader.css';

const Loader = () => {
  return (
    <div className="block">
      <p className="circle">
        <span className="ouro">
          <span className="left">
            <span className="anim" />
          </span>
          <span className="right">
            <span className="anim" />
          </span>
        </span>
      </p>
    </div>
  );
};

// {/*
//     <span className="ouro ouro2">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>

//     <span className="ouro ouro3">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>
//   </p>

//   <p className="round">
//     <span className="ouro">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>

//     <span className="ouro ouro2">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>

//     <span className="ouro ouro3">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>
//   </p>

//   <p className="double">
//     <span className="ouro">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>

//     <span className="ouro ouro2">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>

//     <span className="ouro ouro3">
//       <span className="left">
//         <span className="anim" />
//       </span>
//       <span className="right">
//         <span className="anim" />
//       </span>
//     </span>
//   </p>

//   <p className="info">
//     <a href="http://en.wikipedia.org/wiki/Ouroboros">
//       Why the name OuroboroCSS?
//     </a>
//     <br />
//     <a href="https://twitter.com/geoffrey_crofte">by @geoffrey_crofte</a>
//   </p> */}

export default Loader;
