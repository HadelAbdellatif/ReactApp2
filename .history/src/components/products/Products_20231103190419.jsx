import React, { useEffect, useState } from 'react'

export default function () {

    let [products, setProducts] = useState([]);

    const getProducts = async () =>{
        
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        setProducts(data);
    }

    useEffect( ()=>{
        getProducts();
    }, [])

  return (
    <div className='row mt-5'>
        {products.map( (product)=>{
                return(
                    <div className='col-md-4  pb-5' key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.image} className='w-100' />
                    </div>
                )
            })}
    </div>
  )
}
