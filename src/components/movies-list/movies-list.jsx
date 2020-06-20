import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: {},
    };

    this.handleMovieCardHover = this.handleMovieCardHover.bind(this);
  }

  handleMovieCardHover(hoveredMovie) {
    this.setState({
      activeMovie: hoveredMovie,
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.movies.map((movie, index) => (
          <SmallMovieCard
            key={movie.title + index}
            movie={movie}
            onMovieCardHover={this.handleMovieCardHover}
            onMovieTitleClick={this.handleMovieTitleClick} />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default MoviesList;
