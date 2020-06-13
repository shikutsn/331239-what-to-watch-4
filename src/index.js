import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
};

ReactDOM.render(
    <App
      promoMovieTitle = {promoMovie.title}
      promoMovieGenre = {promoMovie.genre}
      promoMovieReleaseYear = {promoMovie.releaseYear}
    />,
    document.querySelector(`#root`)
);
