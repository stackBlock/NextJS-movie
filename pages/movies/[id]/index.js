import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions/index";
import Link from "next/link";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      // Handle then later
      router.push("/");
    });
  };
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
        <button className="btn btn-primary btn-lg mr-1" href="#" role="button">
          Learn more
        </button>
        <button
          onClick={() => handleDeleteMovie(id)}
          className="btn btn-danger btn-lg mr-1"
          href="#"
          role="button"
        >
          Delete
        </button>
        <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
          <button className="btn btn-warning btn-lg" role="button">
            Edit
          </button>
        </Link>
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
