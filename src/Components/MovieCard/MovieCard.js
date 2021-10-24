import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core";
import "./MovieCard.css"
import {Link, BrowserRouter} from "react-router-dom"
const MovieCard = ({
    movie: {id, name, image, date, type, rating, description },
    handleMovie, match, history
  }) => {
    return (
      <div className="card">
        <div className="card_left">
          <img src={image} alt="poster" />
        </div>
        <div className="card_right">
          <h1>{name}</h1>
          <div className="card_right__details">
            <ul>
              <li>{date}</li>
              <li>||</li>
              <li>{type}</li>
            </ul>
          </div>
          <div className="card_right__rating">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" value={rating} readOnly />
            </Box>
          </div>
          <div className="card_right__review">
            <p>{description}</p>
            <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
          </div>
          <div className="card_right__button">
          <BrowserRouter> 
           <Link to={{pathname:`/description/${id}`, state:{movie:{name, image, date, type, rating, description}}}}>see trailer</Link>
          </BrowserRouter>
         
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieCard;