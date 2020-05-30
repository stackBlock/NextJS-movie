import React from "react";
import Link from 'next/link';

class MovieList extends React.Component {

  shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + '...'
    }
  }

  renderMovies(movies) {
    return movies.map((movie) => 
    (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
        <div className="card h-100">
          <a>
            <img className="card-img-top" src={movie.cover} alt="" />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              
              <a>{movie.name}</a>
              
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">{this.shorten(movie.longDesc, 75)})</p>
          </div>
          <div className="card-footer">
            {parseInt(movie.rating) >= 5 ? (
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </small>
            ) : parseInt(movie.rating) >= 4 ? (
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            ) : parseInt(movie.rating) >= 3 ? (
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9734; &#9734;
              </small>
            ) : parseInt(movie.rating) >= 2 ? (
              <small className="text-muted">
                &#9733; &#9733; &#9734; &#9734; &#9734;
              </small>
            ) : parseInt(movie.rating) >= 1 ? (
              <small className="text-muted">
                &#9733; &#9734; &#9734; &#9734; &#9734;
              </small>
            ) : (
              <small className="text-muted">
                &#9734; &#9734; &#9734; &#9734; &#9734;
              </small>
            )}
          </div>
        </div>
            </Link>
      </div>
    ));
  }
  render() {
    const { movies } = this.props;

    return (
      <React.Fragment>
        { this.renderMovies(movies) }
      </React.Fragment>
    )
  }
}

export default MovieList;

// {movies.rating >= 4 ? rating : rating}
