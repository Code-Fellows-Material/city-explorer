import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import LocationCard from "./LocationCard";

class InputForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            input: '',
            locationObject: {},
            ImageURL: '',
            error: false
        }
    }

    async getLocationData (inputData){
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
            console.error(error);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            input: e.target.input.value
        }, this.getLocationData)
    }

    render() {
        return (
        <Container>
            <Form onSubmit={ this.handleSubmit }>
            <Form.Group className="mb-3">
                <Form.Label>Enter Location</Form.Label>
                <Form.Control type="text" name="input" placeholder="Explore!" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <LocationCard img={this.state.ImageURL} location={this.state.locationObject}/>
        </Container>
        );
    }
}

export default InputForm;
