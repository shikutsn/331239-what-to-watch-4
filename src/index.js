import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const AppData = {
  PROMO_MOVIE: {
    TITLE: `The Grand Budapest Hotel`,
    GENRE: `Drama`,
    RELEASE_YEAR: 2014,
  },
  FILMS: [`Revenant`, `No Country for Old Men`, `Snatch`, `Bohemian Rhapsody`, `Pulp Fiction`, `Shutter Island`],
};

ReactDOM.render(
    <App
      promoMovieTitle = {AppData.PROMO_MOVIE.TITLE}
      promoMovieGenre = {AppData.PROMO_MOVIE.GENRE}
      promoMovieReleaseYear = {AppData.PROMO_MOVIE.RELEASE_YEAR}
      films = {AppData.FILMS}
    />,
    document.querySelector(`#root`)
);
