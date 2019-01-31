import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render(){
    return(
      <div>
        <Container fluid>
          <Jumbotron><h1>Hello!</h1><p>We can fix anything.</p></Jumbotron>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={4}>
              <h2>Subhead 1</h2>
              <p>I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. You got your heavy coat out yet? It's getting colder. Here we're limited by the time we have. You can create the world you want to see and be a part of. You have that power. Happy painting, God bless.</p>
            </Col>
            <Col xs={12} sm={4}>
              <h2>Subhead 2</h2>
              <p>We have no limits to our world. We're only limited by our imagination. Each highlight must have it's own private shadow. You need the dark in order to show the light. In nature, dead trees are just as normal as live trees.</p>
              <p>We can fix anything. Even the worst thing we can do here is good. We need a shadow side and a highlight side.</p>
            </Col>
            <Col xs={12} sm={4}>
              <h2>Subhead 3</h2>
              <p>We'll throw some old gray clouds in here just sneaking around and having fun. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Every highlight needs it's own personal shadow.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
