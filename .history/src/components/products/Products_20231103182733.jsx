import React, { useState } from 'react'

export default function () {

    let [products, setProducts] = useState([]);

    const getProducts = async () =>{
        
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json;
        setProducts(data);
    }

    const 

  return (
    <>

    </>
  )
}
