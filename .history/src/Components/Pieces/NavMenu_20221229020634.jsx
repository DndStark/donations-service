import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function NavMenu() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Principal">
        aaaaaaaaaaaaaa
      </Tab>
      <Tab eventKey="donations" title="Donaciones">
        bbbbbbbbbbbbbb
      </Tab>
      <Tab eventKey="campaigns" title="Campañas">
        cccccccccccccc
      </Tab>
      <Tab eventKey="longer-tab" title="Donaciones">
        dddddddddddddd
      </Tab>
    </Tabs>
  );
}

export default NavMenu;