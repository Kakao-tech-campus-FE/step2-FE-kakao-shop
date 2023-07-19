
import { useParams } from 'react-router-dom'
import { useState,useEffect } from "react";
import { getProductById } from '../services/product';
import { useQuery } from "@tanstack/react-query";
import ProductInformationColumn from '../components/molecules/ProductInformationColumn';
import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';
import Loader from '../components/atoms/Loader';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';
import Fourzerofour from './Fourzerofour';


const ProductDetailPage = () => {
    const { id } = useParams() //string
    //const parseId = parseInt(id, 10);
    // const dispatch = useDispatch();
    // const [error,setError]=useState(null);
    const {
        data,
        isLoading,
        isError,
        error,
        } = useQuery(['product',id],()=>getProductById(id))
        // .catch(err=>{
        //     if(err.data.error.status===404){
        //         alert(err.data.error.message)
        //         return(<Fourzerofour/>);
        //     }  throw err;
        // })
        //, 
        // { suspense: true});
        console.log(isError)
             
    // const { loading, error, detail } = useSWR(`/products/${id}`, getProductById)
    //useQuery 는 최초상태 없음.


    if (!id) {
        return <div>잘못된 접근</div>;
    }

    if (isLoading) 
    return <h1 class="text-purple">Loading...</h1>
   

    if (isError){ 
    console.log(isError)
    console.log(error.data.error.status)
    return (
        <>
        <Fourzerofour/>

        </>)}

    else{
        const product = data?.data?.response;
        return(
            <><Header />
            <ProductDetailTemplate product={product}/>
            <Footer /></>)
        }
    // return (
    //     <div>
    //         {isLoading && <Loader/>} 
    //         {isError?<Fourzerofour/>:null}
    //        {product? <>
    //         <Header />
    //        <ProductDetailTemplate product={product}/>
    //        <Footer /></> : null}
          
    //         {/* </Suspense> */}
    //     </div>
    // );
};

export default ProductDetailPage;