import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Part6 extends Component {
    render() {
        return (
            <div>
                <Container className="part6">
                <Row className="part6row" xs={1} md={3} lg={3}>
                <Col className="text1">
                <h1>See what our clients have to say</h1>
                </Col>
                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part6card">
                </Card>
                </Col>
                <Col className="text1">
                    <p>
                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla”
                    </p>
                    <h5>Paula James</h5>
                    <h6>Social media influencer</h6>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
