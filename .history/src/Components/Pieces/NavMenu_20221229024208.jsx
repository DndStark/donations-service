import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BChart } from "../Graphics/BChart";

function NavMenu() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Principal">
        <BChart/>
      </Tab>
      <Tab eventKey="donations" title="Donaciones">
        bbbbbbbbbbbbbb
      </Tab>
      <Tab eventKey="campaigns" title="Campañas">
        cccccccccccccc
      </Tab>
      <Tab eventKey="users" title="Usuarios">
        dddddddddddddd
      </Tab>
      <Tab eventKey="locations" title="Sitioss">
        eeeeeeeeeeeeee
      </Tab>
    </Tabs>
  );
}

export default NavMenu;