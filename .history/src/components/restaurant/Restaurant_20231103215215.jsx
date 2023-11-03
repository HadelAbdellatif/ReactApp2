import { useState, useEffect} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {

  

  return (
    < >
     <div className='row mt-5'>
        {restaurantMenu.map( (ele)=>{
                return(
                    <div className='col-md-4  pb-5' key={ele.id}>
                        <h2>{ele.title}</h2>
                        <img src={ele.image_url} className='w-100' />
                    </div>
                )
            })}
    </div>
    </>
  );
}

export default RestaurantMenu;