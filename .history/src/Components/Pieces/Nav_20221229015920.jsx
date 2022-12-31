import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        asdfasdf
      </Tab>
      <Tab eventKey="profile" title="Profile">
        12341234
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        aaaaaaaaaaaaaaa
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        nnnnnnnnnn
      </Tab>
    </Tabs>
  );
}

export default FillExample;