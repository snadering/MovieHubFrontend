import axios from "axios";

const baseUrl = "https://movie-hub-api.tobiasthedanish.dk/api/v1"

export default function dbFacade() {
  const getUser = (form) => {
    return {
      username: form.querySelector("[name='username']").value,
      password: form.querySelector("[name='password']").value,
    };
  }

  const login = async (user) => {
    return await fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  const register = async (user) => {
    return await fetch(baseUrl + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  const logout = async (token) => {
    localStorage.removeItem("jwtToken");
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  }

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  }

  return {
    getUser,
    login,
    register,
    logout,
    setToken,
    getToken,
  }
}