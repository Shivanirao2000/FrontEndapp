import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LOGO from '../icons/footer logo.svg';

export default class Part8 extends Component {
    render() {
        return (
            <div>
                <Container className="logo">
                <Row xs={1} md={2}>
                    <Col>
                    <img height={90} src={LOGO}/>
                    </Col>
                <Col>
                <input className="input" placeholder="Enter your email"></input><button>Subscribe</button>
                </Col>
                </Row>
                <div className="line"></div>
                <div className="socials">
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-twitter-square"></i></li>
                <li><i class="fab fa-youtube"></i></li>
                </div>
                </Container>
            </div>
        )
    }
}
