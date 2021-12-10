import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'


class WeatherDay extends Component {

    render() {
        return (
        <Container className="px-5 py-3">
            <Card style={{boxShadow: 'none'}} border="dark">
                <Card.Header style={{textAlign: 'center' ,fontSize: "1.4em", textDecoration: 'underline'}}>{this.props.weatherData.date.slice(5)}</Card.Header>
                <Card.Body style={{textAlign: 'center' ,fontSize: "1.2em" }}>
                {this.props.weatherData.description}
                </Card.Body>
            </Card>
        </Container>
        );
    }
}

export default WeatherDay;
