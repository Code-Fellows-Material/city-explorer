import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

class ErrorCard extends Component {

    render() {
        return (
            <Container className="p-5">
                <Card border="danger" style={{ width: "30rem", margin: "auto" }}>
                    <Card.Header style={{ color: "red", textAlign: 'center' ,fontSize: "2em" }}>{this.props.type} Error!</Card.Header>
                    <Card.Body style={{ textAlign: 'center' , fontSize: "1.5em" }}>
                        {this.props.error}
                        <p> Please try another search...</p>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default ErrorCard;
