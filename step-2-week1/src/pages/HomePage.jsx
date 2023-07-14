import ProductGrid from "../component/organisms/ProductGrid";
import Loding from "../component/atoms/Loader";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loding, setLoding] = useState(true);


  return (
    <div>

      <h1>Home Page</h1>
        <ProductGrid product />
    </div> 
    );

  };


export default HomePage;