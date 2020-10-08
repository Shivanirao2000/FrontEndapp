import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Icons1 from '../icons/icons (1).svg';
import Icons2 from '../icons/icons (2).svg';
import Icons3 from '../icons/icons (3).svg';
import Icons4 from '../icons/icons (4).svg';
import Icons5 from '../icons/icons (5).svg';
import Icons6 from '../icons/icons (6).svg';

export default class Part4 extends Component {
    render() {
        return (
            <div>
                <Container className="part4">
                <Row className="part4row" xs={1} md={2} lg={3}>
                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part4card">
                <Card.Img variant="top" src={Icons1} style={{height: "4rem", width: "4rem" }} className="part4cardicon"/>
                <Card.Body>
                    <Card.Title>Social Media</Card.Title>
                    <Card.Text style={{color: "#898686"}}>
                        <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </p>
                    <p>
                    Learn More <i class="fal fa-arrow-right"></i>
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part4card">
                <Card.Img variant="top" src={Icons2} style={{height: "4rem", width: "4rem" }} className="part4cardicon"/>
                <Card.Body>
                    <Card.Title>Social Media</Card.Title>
                    <Card.Text style={{color: "#898686"}}>
                        <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </p>
                    <p>
                    Learn More <i class="fal fa-arrow-right"></i>
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part4card">
                <Card.Img variant="top" src={Icons3} style={{height: "4rem", width: "4rem" }} className="part4cardicon"/>
                <Card.Body>
                    <Card.Title>Social Media</Card.Title>
                    <Card.Text style={{color: "#898686"}}>
                        <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </p>
                    <p>
                    Learn More <i class="fal fa-arrow-right"></i>
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part4card">
                <Card.Img variant="top" src={Icons4} style={{height: "4rem", width: "4rem" }} className="part4cardicon"/>
                <Card.Body>
                    <Card.Title>Social Media</Card.Title>
                    <Card.Text style={{color: "#898686"}}>
                        <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </p>
                    <p>
                    Learn More <i class="fal fa-arrow-right"></i>
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part4card">
                <Card.Img variant="top" src={Icons5} style={{height: "4rem", width: "4rem" }} className="part4cardicon"/>
                <Card.Body>
                    <Card.Title>Social Media</Card.Title>
                    <Card.Text style={{color: "#898686"}}>
                        <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </p>
                    <p>
                    Learn More <i class="fal fa-arrow-right"></i>
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="part4card">
                <Card.Img variant="top" src={Icons6} style={{height: "4rem", width: "4rem" }} className="part4cardicon"/>
                <Card.Body>
                    <Card.Title>Social Media</Card.Title>
                    <Card.Text style={{color: "#898686"}}>
                        <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </p>
                    <p>
                    Learn More <i class="fal fa-arrow-right"></i>
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
