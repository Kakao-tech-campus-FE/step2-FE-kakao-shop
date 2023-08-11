  import {Link, useLocation} from 'react-router-dom';
  import "../style/breadcrumbs.css";
  import React, {useState} from 'react';


function Breadcrumbs() {
    const location = useLocation();
    const [title, setTitle] = useState("Week1_KangSeongjun")

    return (
      <nav>
        <Link to="/" 
          className={location.pathname=== "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Home
        </Link>
        <span className='arrow'>&gt;</span>
        <Link to="/title"
          className={location.pathname.startsWith("/title") ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          {title}
        </Link>
        <span className='arrow'>&gt;</span>
        <Link to="/title/product"
          className={location.pathname==="/title/product" ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Product
        </Link>
      </nav>
    );
  }

export default Breadcrumbs;
