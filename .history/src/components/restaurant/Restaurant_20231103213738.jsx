import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Pizza" title="Pizza">
        Tab content for Pizza
      </Tab>
      <Tab eventKey="Salad" title="Salad">
        Tab content for Salad
      </Tab>
      <Tab eventKey="Onion" title="Profile">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;