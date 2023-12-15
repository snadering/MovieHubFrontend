import express, { response } from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 8000;
const app = express();

const API_KEY = process.env.REACT_APP_API_KEY;

app.use(cors())

app.get("/movies", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/movies/:id", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${req.params.id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/search/movies", (req, res) => {

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${req.query.query}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((err) => console.error(err));
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
