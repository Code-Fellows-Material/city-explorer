import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from "react-bootstrap";

class Movie extends Component {

    movieList = () => {
        let movieArr = [];
        for(let i = 0; i < this.props.movieData.length; i++){
            movieArr.push(<ListGroupItem style={{textAlign: 'center' ,fontSize: "1.2em" }}>Title: {this.props.movieData[i].title} - Popularity: {this.props.movieData[i].popularity}</ListGroupItem>);
        }
        return movieArr;
    };

    render() {
        return (
        <Container className="p-5">
            <Card border="dark" style={{ width: "40rem", margin: "auto" }}>
                <Card.Header style={{textAlign: 'center' ,fontSize: "2em" }}>Movies</Card.Header>
                <ListGroup variant="flush">     
                    {this.movieList()}
                </ListGroup>
            </Card>
        </Container>
        );
    }
}

export default Movie;
