import { useRouter } from "next/router";
import { getMovieById } from "../../actions/index";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;
  return (
    <div>
      <div className="jumbotron">
        <a>
          <img className="card-img-top" src={movie.cover} alt="" />
        </a>
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />

        <div>
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
        <p>Release Year: {movie.releaseYear}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
        <a>
          <img className="card-img-top" src={movie.image} alt="" />
        </a>
      </div>
      <p>{movie.longDesc}</p>
    </div>
  );
};

export default Movie;

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return {
    movie,
  };
};
