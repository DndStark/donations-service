import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function NavMenu() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Principal">
        asdfasdf
      </Tab>
      <Tab eventKey="profile" title="Campañas">
        12341234
      </Tab>
      <Tab eventKey="longer-tab" title="Donaciones">
        aaaaaaaaaaaaaaa
      </Tab>
    </Tabs>
  );
}

export default NavMenu;