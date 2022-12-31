import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { BChart } from "../Graphics/BChart";
import { app } from "../../fb";
import { useEffect } from "react";

function NavMenu() {

  const logout = () => {
    app.auth().signOut();
  }

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });
  }, []);

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
        Sección Donaciones
      </Tab>
      <Tab eventKey="campaigns" title="Campañas">
        Sección Campañas
      </Tab>
      <Tab eventKey="users" title="Usuarios">
        Sección Usuarios
      </Tab>
      <Tab eventKey="locations" title="Sitios">
        Sección Sitios
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