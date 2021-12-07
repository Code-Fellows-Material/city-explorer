import React, { Component } from 'react'
import axios from "axios";
import Container from "react-bootstrap/Container"
import LocationCard from "./LocationCard";
import InputForm from './InputForm'

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          locationObject: {},
          ImageURL: '',
          input: '',
          error: false
      }
  }

  async getLocationData (){
      try {
          const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.input}&format=json`);
          this.setState({
              locationObject: response.data[0]
          })
          this.setState({
              ImageURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=[${this.state.locationObject.lat},${this.state.locationObject.lon}]&zoom=11`
          })
      } 
      catch (error) {
        this.setState({ error: true })
      }
  }

  setLocation = (inputVal) => {
      if(inputVal === ''){
        this.setState({
          locationObject: {}
        })
      } else {
        this.setState({
          input: inputVal
      }, this.getLocationData)
      }
  }


  render() {
    return (
      <Container>
        <InputForm setLocation={this.setLocation} input={this.state.input} />
        {this.state.error ? <h2>error</h2> : Object.keys(this.state.locationObject).length !== 0  && <LocationCard img={this.state.ImageURL} location={this.state.locationObject}/>}
      </Container>
    )
  }
}

export default App
