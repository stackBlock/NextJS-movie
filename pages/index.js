import React, { useState, useEffect } from "react";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies } from "../actions/index";

const Home = ({ movies }) => {
  /////////////////////////////////////////////

  return (
    <div>
      <div className="home-page">
        <div className="container" style={{ paddingTop: 25 }}>
          <div className="row">
            <div className="col-lg-3">
              <SideMenu appName={"Movie DB"} />
            </div>
            <div className="col-lg-9">
              <Carousel />
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
  const movies = await getMovies();
  return {
    movies,
  };
};

