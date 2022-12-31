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
      <Tab eventKey="home" title="Home">
        asdfasdf
      </Tab>
      <Tab eventKey="profile" title="Profile">
        12341234
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        aaaaaaaaaaaaaaa
      </Tab>
    </Tabs>
  );
}

export default NavMenu;