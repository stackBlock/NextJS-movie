import React, { useState, useEffect } from "react";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies, getNewMovies, getCatagories } from "../actions/index";

const Home = ({ movies, images, catagories }) => {
  const [filter, setFilter] = useState("");

  const changeCategory = (category) => {
    setFilter(category);
  };

  const filterMovies = (movies) => {
    if (filter == 'All Movies') {
      return movies
    }
    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter.toLowerCase());
    });
  };

  return (
    <div>
      <div className="home-page">
        <div className="container" style={{ paddingTop: 25 }}>
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                changeCategory={changeCategory}
                activeCategory={filter}
                catagories={catagories}
                appName={"Movie DB"}
              />
            </div>
            <div className="col-lg-9">
              <Carousel images={images} />
              <h1 className="text-center" >{`Displaying ${
                filter !== "All Movies" ? filter : "All"
              } Movies`}</h1>
              <div className="row">
                <MovieList movies={filterMovies(movies) || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-page {
            padding-top: 25px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;

Home.getInitialProps = async () => {
  var images = [];
  const movies = await getMovies();
  const newMovies = await getNewMovies();
  const catagories = await getCatagories();
  movies.map((movie) => {
    images.push({
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name,
    });
  });
  newMovies.map((movie) => {
    images.push({
      id: `image-${movie.id}`,
      url: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      name: movie.title,
    });
  });
  return {
    movies,
    images,
    catagories,
  };
};
