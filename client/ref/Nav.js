import React, { useState } from "react";
import { Sidenav } from "rsuite";

const instance = (
  <div style={{ width: 250 }}>
    <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
            Trade Post
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
            Logout
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);
ReactDOM.render(instance);
