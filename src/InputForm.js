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
                <Card className="mx-auto" style={{minWidth: '600px', maxWidth: '80%'}} border="dark">
                    <Card.Header className="top-card-header">Search</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label style={{color: 'rgba(0, 0, 255, .6)', fontSize: "1.2em", fontWeight: 'bold' }} >Enter Location:</Form.Label>
                                <Form.Control style={{ fontSize: "1.2em", fontWeight: 'bold', textAlign: 'center'}} type="text" name="input" placeholder="Explore!" />
                            </Form.Group>
                            <Button style={{backgroundColor: 'rgba(0, 0, 255, .5)', fontSize: "2em", fontWeight: 'bold' }} className="d-grid gap-2 col-6 mx-auto" variant="primary" type="submit">
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
