import React from "react";

import Container from 'react-bootstrap/Container'
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="display-4 text-center font-weight-bold">
          {" "}
          THE DIRECTORY
        </h1>
      </Container>
    </Jumbotron>
  );
}

export default Header;
