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
        aaaaaaaaaaaaaa
      </Tab>
      <Tab eventKey="profile" title="Campañas">
        bbbbbbbbbbbbbb
      </Tab>
      <Tab eventKey="longer-tab" title="Donaciones">
        cccccccccccccc
      </Tab>
    </Tabs>
  );
}

export default NavMenu;