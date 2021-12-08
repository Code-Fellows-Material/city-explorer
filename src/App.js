import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LocationCard from "./LocationCard";
import InputForm from "./InputForm";
import ErrorCard from "./ErrorCard";
import Weather from "./Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObject: {},
      ImageURL: "",
      input: "",
      error: false,
      errorResponse: "",
      weatherData: {},
      weatherDataError: false,
      WeatherErrorResponse: "",
    };
  }

  async getWeatherData() {
    try {
      const weatherResponse = await axios.get(
        `http://localhost:3001/weather?searchQuery=${this.state.input}`
      );
      console.log(weatherResponse.data);
      this.setState({
        weatherDataError: false,
        weatherData: weatherResponse.data,
      });
    } catch (error) {
      this.setState({
        weatherDataError: true,
        WeatherErrorResponse: error.response.data.error,
      });
    }
  }

  async getLocationData() {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.input}&format=json`
      );
      this.setState({
        error: false,
        locationObject: response.data[0],
      });
      this.setState({
        ImageURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=[${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=11`,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorResponse: error.response.data.error,
      });
    }
    this.getWeatherData();
  }

  setLocation = (inputVal) => {
    if (inputVal === "") {
      this.setState({
        locationObject: {},
        error: false,
      });
    } else {
      this.setState(
        {
          input: inputVal,
        },
        this.getLocationData
      );
    }
  };

  render() {
    return (
      <Container id="app-container" fluid>
        <InputForm setLocation={this.setLocation} input={this.state.input} />
        <Row sm={1} md={1} lg={1} xl={2}>
          {this.state.error ? (
            <ErrorCard type="Location" error={this.state.errorResponse} />
          ) : (
            Object.keys(this.state.locationObject).length !== 0 && (
              <LocationCard
                img={this.state.ImageURL}
                location={this.state.locationObject}
              />
            )
          )}
          {this.state.weatherDataError ? (
            <ErrorCard type="Weather" error={this.state.WeatherErrorResponse} />
          ) : (
            Object.keys(this.state.weatherData).length !== 0 && (
              <Weather weatherData={this.state.weatherData} />
            )
          )}
        </Row>
      </Container>
    );
  }
}

export default App;
