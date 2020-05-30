import React, { useState, useEffect } from "react";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies, getNewMovies } from "../actions/index";

const Home = ({ movies, images }) => {
  // console.log(JSON.stringify(images))

  return (
    <div>
      <div className="home-page">
        <div className="container" style={{ paddingTop: 25 }}>
          <div className="row">
            <div className="col-lg-3">
              <SideMenu appName={"Movie DB"} />
            </div>
            <div className="col-lg-9">
              <Carousel images={images} />
              <div className="row">
                <MovieList movies={movies || []} />
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
      url: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
      name: movie.title,
    });
  });
  return {
    movies,
    images,
  };
};
