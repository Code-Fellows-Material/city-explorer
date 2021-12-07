import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup";

class LocationCard extends Component {

    render() {
        return (
        <Container>
            <Card>
            <Card.Title>{this.props.location.display_name}</Card.Title>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Latitude: {this.props.location.lat}</ListGroup.Item>
                    <ListGroup.Item>Long: {this.props.location.lat}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Container>
        );
    }
}

export default LocationCard;
