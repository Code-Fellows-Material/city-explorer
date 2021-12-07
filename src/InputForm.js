import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class InputForm extends Component {
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.setLocation(e.target.input.value);
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
        </Container>
        );
    }
}

export default InputForm;
