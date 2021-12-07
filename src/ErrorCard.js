import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

class ErrorCard extends Component {

    render() {
        return (
        <Container>
            <Card border="danger" style={{ width: '18rem'}}>
            <Card.Title>Error!</Card.Title>
            <Card.Body>
                {this.props.error}
            </Card.Body>
            </Card>
        </Container>
        );
    }
}

export default ErrorCard;
