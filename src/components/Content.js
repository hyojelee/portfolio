import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class Content extends React.Component{
    
    render(){
        return( 
        <Container fluid={true}>
            <Row className="justify-content-centre">
                <Col>
                    {this.props.children}
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Content;