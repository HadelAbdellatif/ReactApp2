import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {

    let [menu, setMenu] = useState([]);
    let [category, setCategory] = useState('Pizza')

    const getMenu = async (category) => {

        let link = 'https://forkify-api.herokuapp.com/api/search?q=' + category;
        let response = await fetch(link);
        let data = await response.json();
        let data2 = data.recipes;
        setMenu(data2);
    }

    useEffect(() => {
        getMenu(category);
    }, [category])


    const handleSelect = (key) => {
        setCategory(key.toLowerCase()); // Update category state when a tab is selected
    };

    return (

        <>

            <Tabs
                defaultActiveKey="Pizza"
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={handleSelect}
            >
                <Tab eventKey="Pizza" title="Pizza">
                    <div className='row mt-5'>
                        {menu.map((ele) => {
                            return (
                                <div className='col-md-4  pb-5' key={ele.id}>
                                    <h2>{ele.title}</h2>
                                    <img src={ele.image_url} className='w-100' />
                                </div>
                            )
                        })}
                    </div>
                </Tab>

                <Tab eventKey="Salad" title="Salad">
                    <div className='row mt-5'>
                        {menu.map((ele) => {
                            return (
                                <div className='col-md-4  pb-5' key={ele.id}>
                                    <h2>{ele.title}</h2>
                                    <img src={ele.image_url} className='w-100' />
                                </div>
                            )
                        })}
                    </div>
                </Tab>


                <Tab eventKey="Onion" title="Onion">
                    <div className='row mt-5'>
                        {menu.map((ele) => {
                            return (
                                <div className='col-md-4  pb-5' key={ele.id}>
                                    <h2>{ele.title}</h2>
                                    <img src={ele.image_url} className='w-100' />
                                </div>
                            )
                        })}
                    </div>
                </Tab>
            </Tabs>

        </>
    );
}

export default RestaurantMenu;