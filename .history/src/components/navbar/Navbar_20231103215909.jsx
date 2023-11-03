import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function CustomerNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/products" className="px-2 text-dark text-decoration-none">Products</Link>
          <Link to="/restaurant" className="px-2 text-dark text-decoration-none">Restaurant</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomerNavbar;
export function RestaurantMenu() {

    let [Menu, setMenu] = useState([]);

    const getMenu = async () => {

        let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await response.json();
        setMenu(data);
    };

    useEffect(() => {
        getMenu();
    }, []);


    return (
        <>
            <div className='row mt-5'>
                {Menu.map((ele) => {
                    return (
                        <div className='col-md-4  pb-5' key={ele.id}>
                            <h2>{ele.title}</h2>
                            <img src={ele.image_url} className='w-100' />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
