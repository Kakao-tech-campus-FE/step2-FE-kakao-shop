import { useEffect, useState } from "react";
import React from 'react'
import { getDetail } from "../../api/getDetail"
import { useQuery } from 'react-query';

const Product = () => {

    const productid = "1";
    const { isLoding, isError, data, error } = useQuery( 
        "productid", 
        () => getDetail(productid)
    )

    console.log(data, error)
    

    return (
        <div>{JSON.stringify(data)}</div>

    )
}

export default Product