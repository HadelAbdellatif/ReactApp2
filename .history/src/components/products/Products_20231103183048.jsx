import React, { useEffect, useState } from 'react'

export default function () {

    let [products, setProducts] = useState([]);

    const getProducts = async () =>{
        
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json;
        setProducts(data);
    }

    useEffect( ()=>{
        getProducts();
    }, [])

  return (
    <div className='row'>
        {
            products.map( (product) =>{
                return(
                    <div className='product col-m'
                )
            })
        }
    </div>
  )
}
