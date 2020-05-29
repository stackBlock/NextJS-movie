import React from "react";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        {movies.map((movie) => {
          return (
            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src={movie.cover}
                  alt=""
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{movie.name}</a>
                </h4>
                  <h5>$24.99</h5>
                <p className="card-text">
                  {movie.description}
                </p>
              </div>
              <div className="card-footer">
              {parseInt(movie.rating) >= 5 ? (<small className="text-muted">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </small>) : parseInt(movie.rating) >= 4 ? (<small className="text-muted">
                  &#9733; &#9733; &#9733; &#9733; &#9734;
                </small>) : parseInt(movie.rating) >= 3 ? (<small className="text-muted">
                  &#9733; &#9733; &#9733; &#9734; &#9734;
                </small>) : parseInt(movie.rating) >= 2 ? (<small className="text-muted">
                  &#9733; &#9733; &#9734; &#9734; &#9734;
                </small>) : parseInt(movie.rating) >= 1 ? (<small className="text-muted">
                  &#9733; &#9734; &#9734; &#9734; &#9734;
                </small>) : (<small className="text-muted">
                  &#9734; &#9734; &#9734; &#9734; &#9734;
                </small>) }
              </div>
            </div>
          </div>
          )
        })}
      </React.Fragment>
    );
  }
}

export default MovieList;

// {movies.rating >= 4 ? rating : rating}