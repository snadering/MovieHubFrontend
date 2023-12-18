import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
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

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>

      {/* login / signup */}
      <Route path="login/" element={<Login />} />
      <Route path="signup/" element={<Signup />} />
      <Route path="logout/" element={<Logout />} />

      {/* Get all movies */}
      <Route path="movies/" element={<MovieList />} />
      <Route path="movies/:id/" element={<MovieDetails />} />

      {/* Top 10 movies */}
      <Route path="top/" element={<MovieList />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
