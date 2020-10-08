import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Part5 extends Component {
    render() {
        return (
            <div>
                <Container className="part5">
                <Row className="part5row" xs={1} md={2} lg={3}>
                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part5card1">
                    <div className="Paula">
                        Paula James
                    </div>
                </Card>
                </Col>
                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part5card2">
                <div className="Paula">
                        Paula James
                    </div>
                </Card>
                </Col>
                
                <Col className="team">
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                </p>
                <h1>
                The team behind us
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla
                </p>
                <button>Meet our team</button>
                </Col>
                
                </Row>
                </Container>
            </div>
        )
    }
}
