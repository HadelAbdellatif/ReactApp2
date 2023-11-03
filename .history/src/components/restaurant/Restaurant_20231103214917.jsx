import { useState, useEffect} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {

    let [restaurantMenu, setRestaurantMenu] = useState([]);

    const getMenu = async () =>{
        
        let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await response.json();
        setRestaurantMenu(data);
    }

    useEffect( ()=>{
        getMenu();
    }, [])


  return (
    < >
     <div className='row mt-5'>
        {restaurantMenu.map( (ele)=>{
                return(
                    <div className='col-md-4  pb-5' key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.image_url} className='w-100' />
                    </div>
                )
            })}
    </div>
    </>
  );
}

export default RestaurantMenu;