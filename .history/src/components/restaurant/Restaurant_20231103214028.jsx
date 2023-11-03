import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {


    
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