import React from "react";
import Card from "react-bootstrap/Card";
import MovieRating from './Rating';

function Movie({ title, rate, description, posterUrl, trailer }) {
    return (
    <div className="movie-card">
        <div>
        <Card className="Card" style={{ width: "330px" }}>
            <Card.Body>
            <img className="Img" src={posterUrl} alt={title} />
            <Card.Title className="Title">{title}</Card.Title>
            <Card.Text className="Text">
                {description}
                <br />
                <div class="VideoLink">
                <a href={trailer} target="_blank">
                Watch the trailer on YouTube
                </a>
            </div>
            </Card.Text>
            <MovieRating MovieRating={rate} isMovieRating={true}/>
            </Card.Body>
        </Card>
        </div>
    </div>
    );
}

export default Movie;
