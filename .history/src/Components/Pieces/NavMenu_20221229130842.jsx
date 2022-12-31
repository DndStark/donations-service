import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { BChart } from "../Graphics/BChart";
import { app } from "../../fb";

function NavMenu() {

  const logout = () => {
    app.auth().signOut();
  }

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
        Sección donaciones
      </Tab>
      <Tab eventKey="campaigns" title="Campañas">
        Sección donaciones
      </Tab>
      <Tab eventKey="users" title="Usuarios">
        Sección donaciones
      </Tab>
      <Tab eventKey="locations" title="Sitios">
        Sección donaciones
      </Tab>
      <Tab eventKey="logout" title="Cerrar sesión">
        <Button variant="secondary" size="lg" onClick={logout}>
          Cerrar sesión
        </Button>{' '}
      </Tab>
    </Tabs>
  );
}

export default NavMenu;