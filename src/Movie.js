import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import { CardImg } from "react-bootstrap";


class MovieCardImg extends Component {

    render() {
        let src = this.props.content ?
        `https://image.tmdb.org/t/p/w500/${this.props.content}`
        :
        'https://www.lacinefest.org/uploads/2/6/7/4/26743637/no-poster_orig.jpeg';
        
        
        return (
            <Container className="p-3">
                <Card className="p-2 mx-auto" border="dark">
                    <CardImg className="p-2 mx-auto" style={{    
                                        height: 'auto', 
                                        width: 'auto',
                                        maxWidth: '300px', 
                                        maxHeight: '300px',
                                        border: '2px solid black',
                                        }} 
                        src={src} alt='movie poster'/>
                </Card>
            </Container>
        );
    }
}

class MovieCard extends Component {

    

    render() {

        return (
            <Container className="p-4 m-auto">
                <Card className="m-auto p-auto" style={{border: '2px solid black'}} border="dark">
                    {this.props.content}
                </Card>
            </Container>
        );
    }
}

class Movie extends Component {

    render() {
        return (
        <Container className="px-5 py-3">
            <Card border="dark">
                <Card.Header className="top-card-header">{this.props.movieData.title}</Card.Header>
                <Card.Body style={{textAlign: 'center' ,fontSize: "1.4em" }}>
                    <Row s={1} lg={2}>
                        <MovieCardImg content={this.props.movieData.imageUrl} />
                        <Col >
                            <MovieCard content={`Votes: ${this.props.movieData.totalVotes}`} />
                            <MovieCard content={`Average: ${this.props.movieData.averageVotes}`} />
                            <MovieCard content={`Popularity: ${this.props.movieData.popularity}`} />
                            <MovieCard content={`Release Date: ${this.props.movieData.releasedOn}`} />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer style={{textAlign: 'center' ,fontSize: "1.3em" }}>
                    {this.props.movieData.overview}
                </Card.Footer>
            </Card>
        </Container>
        );
    }
}

export default Movie;
