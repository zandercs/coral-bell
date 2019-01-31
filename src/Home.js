import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Image, Carousel } from 'react-bootstrap';

class Home extends Component {
  render(){
    const carouselStyle = {
      paddingBottom:30
    };
    return(
      <div>
        <Container style={carouselStyle} fluid>
          <Row>
            <Carousel pauseOnHover={false} interval={4300} fade={true} controls={false}>
              <Carousel.Item><Image src={require("./images/carousel/IMG_9097.jpg")} fluid /></Carousel.Item>
              <Carousel.Item><Image src={require("./images/carousel/IMG_9219.jpg")} fluid /></Carousel.Item>
              <Carousel.Item><Image src={require("./images/carousel/IMG_9280.jpg")} fluid /></Carousel.Item>
              <Carousel.Item><Image src={require("./images/carousel/IMG_9291.jpg")} fluid /></Carousel.Item>
            </Carousel>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h2>About me</h2>
              <p>I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. You got your heavy coat out yet? It's getting colder. Here we're limited by the time we have. You can create the world you want to see and be a part of. You have that power. Happy painting, God bless.</p>
              <p>We have no limits to our world. We're only limited by our imagination. Each highlight must have it's own private shadow. You need the dark in order to show the light. In nature, dead trees are just as normal as live trees.</p>
              <p>We can fix anything. Even the worst thing we can do here is good. We need a shadow side and a highlight side.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
