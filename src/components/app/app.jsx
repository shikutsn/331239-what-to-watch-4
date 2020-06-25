import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null,
    };

    this.movieTitleClickHandler = this.movieTitleClickHandler.bind(this);
  }

  movieTitleClickHandler(newMovie) {
    this.setState({currentMovie: newMovie});
  }

  _renderApp() {
    const {promoMovie, movies} = this.props;

    if (this.state.currentMovie) {
      return (
        <MoviePage
          movie = {this.state.currentMovie}
          movies = {movies}
          onMovieTitleClick = {this.movieTitleClickHandler}
        />
      );
    }

    return (
      <Main
        promoMovie = {promoMovie}
        movies = {movies}
        onMovieTitleClick = {this.movieTitleClickHandler}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage
              movie = {this.props.promoMovie}
              movies = {this.props.movies}
              onMovieTitleClick = {this.movieTitleClickHandler}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      value: PropTypes.number.isRequired,
      votesCount: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      value: PropTypes.number.isRequired,
      votesCount: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired).isRequired,
};


export default App;
