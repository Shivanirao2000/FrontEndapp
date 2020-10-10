import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default class Part7 extends Component {
    render() {
        return (
            <div>
                <Container fluid className="part7">
                <Row className="part7row" xs={1} sm={2} md={2}>
                <Col>
                    <div className="part7text">
                    <p>
                    <h1>See what our clients have to say</h1>
                    </p>
                    
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid
                    </h6>
                    
                    <button>Meet our team</button>
                    </div>
                    </Col>
                    <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part7card">
            
                </Card>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
