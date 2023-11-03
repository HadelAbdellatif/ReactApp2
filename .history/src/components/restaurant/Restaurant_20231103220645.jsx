import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {

    let [menu, setMenu] = useState([]);

    const getMenu = async () =>{
        
        let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await response.recipes.json();
        console.log(data);
    }

    useEffect( ()=>{
        getMenu();
    }, [])


}

export default RestaurantMenu;