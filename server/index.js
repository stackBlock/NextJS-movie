const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require("fs");
const path = require("path");
const filePath = `./data.json`;
const moviesData = require(filePath);

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());


// ***** get all movies *****


  server.get("/api/v1/movies", (req, res) => {
    return res.json(moviesData);
  });


// ***** get movie by id *****


  server.get(`/api/v1/movies/:id`, (req, res) => {
    const { id } = req.params;
    const movie = moviesData.find((m) => m.id === id);

    return res.json(movie);
  });


// ***** post movies *****


  server.post("/api/v1/movies", (req, res) => {
    const movie = req.body;
    moviesData.push(movie);

    const PathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(PathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json("Movie had been successfully added!");
    });
  });


// ***** edit movies *****


server.patch("/api/v1/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  const movieIndex = moviesData.findIndex((m) => m.id === id);
  
  moviesData[movieIndex] = movie

  const pathToFile = path.join(__dirname, filePath);
  const stringifiedData = JSON.stringify(moviesData, null, 2);

  fs.writeFile(pathToFile, stringifiedData, (err) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(movie);
  });
});



// ***** delete movies *****


  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movieIndex = moviesData.findIndex((m) => m.id === id);
    moviesData.splice(movieIndex, 1);

    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json({ message: `Deleting post of id: ${id}` });
    });
  });


// ***** connection information *****


  // We are handling all of the requests coming to our server
  server.get("*", (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
