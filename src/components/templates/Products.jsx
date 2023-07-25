// import React from 'react';
// import ProductCard from '../molecules/ProductCard';
// import { useQuery } from '@tanstack/react-query';
// import { getProducts } from '../../services/product';
// import { useParams } from 'react-router-dom';

// export default function Products() {
//   const { id } = useParams();
//   const { isLoading, error, data } = useQuery('products', getProducts);

//   const products = data?.data.reponse;
//   console.log(data);
//   return (
//     <>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       <ul>
//         {products &&
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </ul>
//     </>
//   );
// }
