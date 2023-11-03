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
    
    </>
  );
}

export default RestaurantMenu;