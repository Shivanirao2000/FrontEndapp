import { CardContent } from '@material-ui/core';
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Part2 extends Component {
    render() {
        return (
            <div>
                <Container className="part2">
                <Row className="part2row" xs={1} md={2}>
                    <Col>
                    <Card style={{backgroundColor: "transparent", border: "none" }} className="part2card">
                    </Card>
                    </Col>
                    <Col>
                    <div className="lorem">
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
                    <Col></Col>
                </Row>
                </Container>
            </div>
        )
    }
}
