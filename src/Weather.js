import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from "react-bootstrap";

class Weather extends Component {

    weatherList = () => {
        let weatherArr = [];
        for(let i = 0; i < this.props.weatherData.length; i++){
            weatherArr.push(<ListGroupItem style={{fontSize: "1.2em" }}><b>{this.props.weatherData[i].date}</b> - {this.props.weatherData[i].description}</ListGroupItem>);
        }
        return weatherArr;
    };

    render() {
        return (
        <Container className="p-5">
            <Card border="dark" style={{ width: "40rem", margin: "auto" }}>
                <Card.Header style={{textAlign: 'center' ,fontSize: "2em" }}>Forecast</Card.Header>
                {/* <Container className="p-3">
                    <Card.Img variant="top" src={this.props.img} />
                </Container>
                <Card.Body>
                    <Card.Footer style={{textAlign: 'center' ,fontSize: "1.2em" }}>
                        Latitude: {this.props.location.lat}, Longitude: {this.props.location.lat}
                    </Card.Footer>
                </Card.Body> */}
                <ListGroup variant="flush">     
                    {this.weatherList()}
                </ListGroup>
            </Card>
        </Container>
        );
    }
}

export default Weather;
