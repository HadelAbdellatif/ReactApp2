import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RestaurantMenu() {
  return (
    <divclassName="ms-5">
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
    </divclassName=>
  );
}

export default RestaurantMenu;