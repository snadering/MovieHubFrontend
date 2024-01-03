const BASE_URL = "https://movie-hub-api.tobiasthedanish.dk/api/v1"

export default function dbFacade() {
  const getUser = (form) => {
    return {
      username: form.querySelector("[name='username']").value,
      password: form.querySelector("[name='password']").value,
    };
  };

  const login = async (user) => {
    return await fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  const register = async (user) => {
    return await fetch(BASE_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  const validateToken = async (token) => {
    const res = await fetch(BASE_URL + "/auth/validate", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);

    return res.ok;
  };

  const isLoggedIn = async () => {
    const token = dbFacade().getToken();

    return token != null && (await dbFacade().validateToken(token));
  };

  const logout = async () => {
    localStorage.removeItem("jwtToken");
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  return {
    getUser,
    login,
    register,
    validateToken,
    isLoggedIn,
    logout,
    setToken,
    getToken,
  };
}