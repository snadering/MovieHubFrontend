import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import Logout from "./components/Logout.jsx";
import getApiFacade from "./facade/apiFacade";
import dbFacade from "./facade/dbFacade.js";
import RatedMovieList from "./components/RatedMovieList.jsx";

let baseUrl = "";
let backdropSizes = [];

if (await dbFacade().isLoggedIn()) {
  const imageData = await getApiFacade.getMovieImages();
  baseUrl = imageData.secure_base_url;
  backdropSizes = imageData.backdrop_sizes;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* login / signup */}
      <Route path="login/" element={<Login />} />
      <Route path="signup/" element={<Signup />} />
      <Route path="logout/" element={<Logout />} />

      {/* Get all movies */}
      <Route
        path="movies/"
        element={
          <MovieList baseUrl={baseUrl} backdropSize={backdropSizes[0]} />
        }
      />
      <Route
        path="movies/:id/"
        element={
          <MovieDetails baseUrl={baseUrl} backdropSize={backdropSizes[2]} />
        }
      />
      <Route
        path="rated/"
        element={
          <RatedMovieList baseUrl={baseUrl} backdropSize={backdropSizes[0]} />
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
