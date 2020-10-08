import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import '../App.css';
import Navbar from './Navbar1';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
            <Container fluid className="Maindiv">
                <Row className="Mainrow" xs={1} md={2}>
                    <Col>
                    <div className="loremMain">
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipisc
                    </p>
                    <h2>Ut wisi enim ad minim veniam, quis </h2>
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                    </h6>
                    <button>About us</button>
                    </div>
                    </Col>
                    <Col>
                <Card style={{backgroundColor: "transparent", border: "none" }} className="maincard">
            
                </Card>
                </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
