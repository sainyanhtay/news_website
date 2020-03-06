import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ToDoListContainer from "./containers/NewsListContainer";

import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <Navigation />
            <Route exact path="/" component={ToDoListContainer} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
