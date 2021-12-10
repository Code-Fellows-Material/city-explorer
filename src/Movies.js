import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Movie from "./Movie";

class Movies extends Component {


    movieList = () => {
        let movieArr = [];
        for(let i = 0; i < this.props.movieData.length; i++){
            movieArr.push(<Movie movieData={this.props.movieData[i]} />);
        }
        return movieArr;
    };

    render() {
        return (
        <Container className="p-5">
            <Card className="mx-auto" style={{minWidth: '600px'}} border="dark">
                <Card.Header className="top-card-header">Movies</Card.Header>
                <ListGroup variant="flush">     
                    {this.movieList()}
                </ListGroup>
            </Card>
        </Container>
        );
    }
}

export default Movies;
