// import { useDispatch, useSelector } from "react-redux";
// import Container from "../atoms/Container";
// import ProductGrid from "../organisms/ProductGrid";
// import { getProducts } from "../../store/slices/productSlice";
// import { useEffect, useRef, useState } from "react";
// import Loader from "../atoms/Loader";
// import { fetchProducts } from "../../services/product";
// import _ from "lodash";
// import { useQuery } from "@tanstack/react-query";

// const MainProductTemplate = () => {
//   const [page, setPage] = useState(0);
//   const [isEnd, setIsEnd] = useState(false);
//   const [products, setProducts] = useState([]);
//   const bottomObserver = useRef();

//   const { data, error, isError, isLoading } = useQuery(
//     [`/products?page=${page}`],
//     () => fetchProducts(page)
//   );

//   const io = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && !isEnd) {
//           console.log("entry.isIntersecting")
//           console.log(entry.isIntersecting)
//           console.log("isEnd")
//           console.log(isEnd)
//           setPage((page) => page + 1);
//         }
//       });
//     },
//     {
//       threshold: 1,
//     }
//   );

//   useEffect(() => {
//     if (data) {
//       if (data.data.response.length < 9) {
//         setIsEnd(true);
//         console.log("but isEnd is actually...")
//         console.log(isEnd)
//         // io.unobserve(bottomObserver.current);
//       }
//       setProducts((prev) => {
//         // console.log(_.uniqBy([...prev, ...data.data.response], "id"));
//         return _.uniqBy([...prev, ...data.data.response], "id");
//       });
//     }
//   }, [data]);

//   useEffect(() => {
//     if (!isLoading && !isEnd) {
//       io.observe(bottomObserver.current);
//     }
//   }, [isLoading]);

//   return (
//     <Container>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <ProductGrid products={products} loading={isLoading} />
//       )}
//       <div ref={bottomObserver}></div>
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