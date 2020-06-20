import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {appMocks} from "./mocks/mocks.js";
import films from "./mocks/films.js";

ReactDOM.render(
    <App
      promoMovie = {appMocks.promoMovie}
      films = {films}
    />,
    document.querySelector(`#root`)
);
