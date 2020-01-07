import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Footer extends React.Component{
    render(){
return(
    <footer className="mt-5">
        <Container fluid={true}>
            <Row className="border-top justify-content-between p-3">
                <Col className="p-0" md={3} sm={12}> HYOJE LEE 
                <Col className="p-0">Computer Engineering Techonology</Col>    
                <Col className="p-0">Humber College</Col> 
                <Col className="p-0">Email : hyojelee1004ss@gmail.com</Col> 
                <Col className="p-0">mobile : 647-781-3802</Col> 


                </Col>
                                <Col className="p-0 d-flex justify-content-end" md={3}> 
                    this Website was made by HYOJE LEE.
                </Col>
            </Row>
        </Container>
    </footer>
);
}
} 

export default Footer;