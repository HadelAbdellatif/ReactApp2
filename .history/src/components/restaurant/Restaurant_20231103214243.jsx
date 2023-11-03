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
    </>
  );
}

export default RestaurantMenu;