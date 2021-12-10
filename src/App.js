import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from 'react-bootstrap/Navbar'
import LocationCard from "./LocationCard";
import InputForm from "./InputForm";
import ErrorCard from "./ErrorCard";
import Weather from "./Weather";
import Movies from "./Movies";

const serverURL = process.env.REACT_APP_SERVER_API;
//const serverURL = 'http://localhost:3001';

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
      weatherErrorResponse: "",
      movieData: {},
      movieDataError: false,
      movieErrorResponse: "",
    };
  }

  async getWeatherData() {
    try {
      const weatherResponse = await axios.get(
        `${serverURL}/weather?lat=${this.state.locationObject.lat}&lon=${this.state.locationObject.lon}`
      );
      console.log(weatherResponse.data);
      this.setState({
        weatherDataError: false,
        weatherData: weatherResponse.data,
      });
    } catch (error) {
      this.setState({
        weatherDataError: true,
        weatherErrorResponse: "Error",
      });
    }
  }

  async getMovieData() {
    try {
      const movieResponse = await axios.get(
        `${serverURL}/movies?searchQuery=${this.state.input}`
      );
      console.log(movieResponse.data);
      this.setState({
        movieDataError: false,
        movieData: movieResponse.data,
      });
    } catch (error) {
      this.setState({
        movieDataError: true,
        movieErrorResponse: "Error",
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
        errorResponse: `Error Message: ${error.response.data.error}`,
        movieDataError: true,
        movieErrorResponse: "Location Search Failed",
        weatherDataError: true,
        weatherErrorResponse: "Location Search Failed",
      }
      );
      return
    }
    this.getWeatherData();
    this.getMovieData();
  }

  setLocation = (inputVal) => {
    if (inputVal === "") {
      this.setState({
        locationObject: {},
        weatherData: {},
        movieData: {},
        error: false,
        movieDataError: false,
        weatherDataError: false,
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
      <Container id="app-container" fluid style={{padding: '0'}}>
        <Navbar variant="dark" style={{backgroundColor: 'rgba(0, 0, 255, .3)'}}>
          <Container>
            <Navbar.Brand style={{color: 'rgba(0, 0, 255, .5)', fontSize: "3em", fontWeight: 'bold' }}>City Explorer.</Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="px-1">
          <InputForm setLocation={this.setLocation} input={this.state.input} />
        </Container>
        <Row sm={1} md={1} lg={1} xl={2}>
          <Container className="p-1">
          { this.state.error ? (<ErrorCard type="Location" error={this.state.errorResponse} />) 
          : 
          (Object.keys(this.state.locationObject).length !== 0 && (<LocationCard img={this.state.ImageURL} location={this.state.locationObject}/>))
          }
          </ Container>
          <Container className="p-1">
          {this.state.weatherDataError ? ( <ErrorCard type="Weather" error={this.state.weatherErrorResponse} />) 
          : 
          (Object.keys(this.state.weatherData).length !== 0 && ( <Weather weatherData={this.state.weatherData} />))
          }
          </ Container>
          <Container className="p-1">
          {this.state.movieDataError ? ( <ErrorCard type="Movie" error={this.state.movieErrorResponse} />)
          :
          (Object.keys(this.state.movieData).length !== 0 && (<Movies movieData={this.state.movieData} />))
          }
          </ Container>
        </Row>
      </Container>
    );
  }
}

export default App;
