import React, { Component } from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    let dir = 'http://aschindler.space/test/getImages.php?dir=images/carousel/';
    fetch(dir)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log('result-items: '+JSON.stringify(result));
          this.setState({photos: result});
        },
        (error) => {
          console.log('result-items:'+error)
        }
      )
  }

  render(){
    //console.log("state: "+this.state.photos);
    const carouselStyle = {
      paddingBottom:30
    };
    return(
      <div>
        <Container style={carouselStyle} fluid>
          <Row>
            <Carousel pauseOnHover={false} interval={4300} fade={true} controls={false}>
              {this.state.photos.map((photo, index)=>{
                return <Carousel.Item key={index}><Image src={"/"+photo} fluid /></Carousel.Item>
              })}
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
