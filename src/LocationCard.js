import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

class LocationCard extends Component {

    render() {
        return (
        <Container className="p-5">
            <Card className="mx-auto" style={{minWidth: '600px', maxWidth: '80%'}} border="dark">
                <Card.Header className="top-card-header">{this.props.location.display_name}</Card.Header>
                <Container className="p-3">
                    <Card.Img variant="top" src={this.props.img} />
                </Container>
                <Card.Body>
                    <Card.Footer style={{textAlign: 'center' ,fontSize: "1.2em" }}>
                        <b>Latitude:</b> {this.props.location.lat}, <b>Longitude:</b> {this.props.location.lon}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Container>
        );
    }
}

export default LocationCard;
