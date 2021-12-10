import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import WeatherDay from "./WeatherDay";

class Weather extends Component {

    weatherList = () => {
        let weatherArr = [];
        for(let i = 0; i < 7; i++){
            weatherArr.push(<WeatherDay weatherData={this.props.weatherData[i]}/>);
        }
        return weatherArr;
    };

    render() {
        return (
        <Container className="p-5">
            <Card className="mx-auto" style={{minWidth: '600px', maxWidth: '80%'}} border="dark">
                <Card.Header className="top-card-header">7 Day Forecast</Card.Header>
                <Row>     
                    {this.weatherList()}
                </Row>
            </Card>
        </Container>
        );
    }
}

export default Weather;
