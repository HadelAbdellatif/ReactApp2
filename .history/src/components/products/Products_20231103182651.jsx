import React, { useState } from 'react'

export default function () {

    let [products, setProduct] = useState([]);

    const getProducts = async () =>{
        
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.
    }

  return (
    <>

    </>
  )
}
