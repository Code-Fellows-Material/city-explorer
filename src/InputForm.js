import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class InputForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setLocation(e.target.input.value);
    };

    render() {
        return (
            <Container className="p-5">
                <Card border="dark" style={{ width: "30rem", margin: "auto" }}>
                    <Card.Header style={{ textAlign: 'center' ,fontSize: "2em" }}>Search</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label style={{fontSize: "1.2em" }}>Enter Location:</Form.Label>
                                <Form.Control type="text" name="input" placeholder="Explore!" />
                            </Form.Group>
                            <Button className="d-grid gap-2 col-6 mx-auto" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </ Container>
        );
    }
}

export default InputForm;
