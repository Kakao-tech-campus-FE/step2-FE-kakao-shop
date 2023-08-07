// import Container from "../atoms/Container"
// import ProductGrid from "../organisms/ProductGrid"
// import { useState, useEffect, useRef } from "react";
// import Loader from "../atoms/Loader";
// import { fetchProducts } from "../services/product";
// import _ from 'lodash';
// import { useQuery } from "@tanstack/react-query";


// const MainProductTemplate = () => {
//   const [page, setPage] = useState(0);
//   const bottomObserver = useRef(null);
//   const [products, setProducts] = useState([]);
//   const [isEnd, setIsEnd] =useState(false);

//   const {data, loading, error} = useQuery(['/products', page], () => 
//     fetchProducts(page)
//   );

//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting && !isEnd) {
//         setPage((page) => page + 1);
//       }
//     })
//   }, {
//     threshold: 0.5,
//   });
//   useEffect(() => {
//     if(!loading && !isEnd && data?.data?.response) {
//       if(data.data.response.length < 9) {
//         setIsEnd(true);
//       }
  
//       const uniqProducts = _.uniqBy([...products, ...data.data.response], 'id')
  
//       if(!_.isEqual(uniqProducts, products)) {
//         setProducts(uniqProducts);
//       }
//     }
//   }, [loading, data, products])

//   useEffect(() => {
//     if (!loading && page === 0) {
//       io.observe(bottomObserver.current);
//     }
//   }, [loading, page]);

//   return (
//     <Container>
//       {!error && loading ? (
//         <Loader/>
//       ): (
//         <ProductGrid products={products} loading={loading}/> 
//       )}
//         <div ref={bottomObserver}></div>
//     </Container>
//   );
// };

// export default MainProductTemplate;


import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { getProducts } from "../../store/slices/productSlice";
import { useEffect, useRef, useState } from "react";
import Loader from "../atoms/Loader";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isEnd) {;
          setPage((page) => page + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    if (!loading && page === 0) {
      io.observe(bottomObserver.current);
    }
  }, [loading]);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <ProductGrid products={products} loading={loading} />
      )}
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;