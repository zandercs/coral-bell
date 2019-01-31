import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

class Category extends Component {
  render(){
    return(
      <div>
        <Container>
          <Row>
            <h2>{this.props.selection}</h2>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Category;
