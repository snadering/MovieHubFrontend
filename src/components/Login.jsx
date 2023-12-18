 import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dbFacade from "../facade/dbFacade";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(undefined);
  const navigate = useNavigate();
  const { getUser, login, setToken } = dbFacade();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = getUser(e.target);
    
    const data = await login(user);

    if (data.token) {
      setToken(data.token);
      navigate("/movies");
    } else {
      setErrorMsg(data.message);
    }
  };

  return (
    <div className="flex gap-2 flex-col p-4 rounded border-neutral-800/75 border w-fit mx-auto my-10">
      <div className="flex gap-2 flex-col p-2 border-b border-neutral-800/40">
        <h2 className="font-bold text-4xl">Login</h2>
        <p className="text-md text-neutral-900/75">
          Insert credentials to login.
        </p>
      </div>
      <div className="p-2 pt-1">
        <form
          onSubmit={handleLogin}
          className="flex gap-2 flex-col items-center"
          action="#"
        >
          {errorMsg && <p className="text-md font-bold text-red-700">{errorMsg}</p>}
          <div className="flex flex-col w-full">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              placeholder="Enter username..."
              className="border rounded p-1 border-neutral-900"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password..."
              className="border rounded p-1 border-neutral-900"
            />
          </div>
          <input
            type="submit"
            className="mt-4 border rounded px-4 py-2 border-neutral-900 cursor-pointer"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
 
export default Login;