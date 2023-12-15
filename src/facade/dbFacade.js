export default function dbFacade() {
  const getUser = (form) => {
    return {
      username: form.querySelector("[name='username']").value,
      password: form.querySelector("[name='password']").value,
    };
  }

  const login = async (user) => {
    return await fetch("http://localhost:7070/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  const register = async (user) => {
    return await fetch("http://localhost:7070/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  }

  const getToken = () => {
    localStorage.getItem("jwtToken")
  }

  return {
    getUser,
    login,
    register,
    setToken,
    getToken,
  }
}