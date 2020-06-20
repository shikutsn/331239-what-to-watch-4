import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {appMocks} from "./mocks/mocks.js";

ReactDOM.render(
    <App
      promoMovie = {appMocks.promoMovie}
      films = {appMocks.films}
    />,
    document.querySelector(`#root`)
);
