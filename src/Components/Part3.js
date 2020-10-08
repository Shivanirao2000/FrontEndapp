import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Part3 extends Component {
    render() {
        return (
            <div>
                <Container className="part3" xs={1} md={2}>
                <Row className="part3row">
                <Col className="text">
                <h6>What can we solve for you?</h6>
                <h2>What can we solve for you?</h2>
                </Col>
                <Col>
                <button>Learn More</button>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
