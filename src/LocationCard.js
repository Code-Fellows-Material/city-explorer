import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

class LocationCard extends Component {

    render() {
        return (
        <Container className="p-5">
            <Card border="dark" style={{ width: "40rem", margin: "auto" }}>
                <Card.Header style={{textAlign: 'center' ,fontSize: "2em" }}>{this.props.location.display_name}</Card.Header>
                <Container className="p-3">
                    <Card.Img variant="top" src={this.props.img} rounded />
                </Container>
                <Card.Body>
                    <Card.Footer style={{textAlign: 'center' ,fontSize: "1.2em" }}>
                        Latitude: {this.props.location.lat}, Longitude: {this.props.location.lat}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Container>
        );
    }
}

export default LocationCard;
