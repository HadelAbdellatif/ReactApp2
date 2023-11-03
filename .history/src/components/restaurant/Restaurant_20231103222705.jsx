import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {

    let [menu, setMenu] = useState([]);

    const getMenu = async (type) =>{
        
        let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=${category}');
        let data = await response.json();
        let data2 = data.recipes;
        setMenu(data2);
    }

    useEffect( ()=>{
        getMenu("Pizza");
    }, [])


  return (
   
     <div className='row mt-5'>
        { menu.map( (ele)=>{
                return(
                    <div className='col-md-4  pb-5' key={ele.id}>
                        <h2>{ele.title}</h2>
                        <img src={ele.image_url} className='w-100' />
                    </div>
                )
            })}
    </div>
  );
}

export default RestaurantMenu;