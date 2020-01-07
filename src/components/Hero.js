import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Hero extends React.Component{
  
    render(){
      


        return(
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container >
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={6}>
                    <h1 className="display-1 font-weight-bolder">{this.props.title}</h1>
                    <h3 className="display-4 font-weight-light">{this.props.subTitle}</h3>
                    <h3 className="lead font-weight-light">{this.props.text}</h3>
                    </Col>

                </Row>

            </Container>
        </Jumbotron>
        );
    }
}
export default Hero;