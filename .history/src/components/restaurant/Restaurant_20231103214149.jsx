import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {

    let [restaurantMenu, setRestaurantMenu] = useState([]);

    const getMenu = async (type) =>{
        
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        setRestaurantMenu(data);
    }

    useEffect( ()=>{
        getMenu();
    }, [])


  return (
    < >
    <Tabs
      defaultActiveKey="Pizza"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Pizza" title="Pizza">
        Tab content for Pizza
      </Tab>
      <Tab eventKey="Salad" title="Salad">
        Tab content for Salad
      </Tab>
      <Tab eventKey="Onion" title="Onion">
        Tab content for Onion
      </Tab>
    </Tabs>
    </>
  );
}

export default RestaurantMenu;