import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import dbFacade from "./facade/dbFacade";
import { useEffect, useState } from "react";

const publicPaths = ["/", "/login", "/signup"];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInState = async () => {
      const isLoggedIn = await dbFacade().isLoggedIn();
      setLoggedIn(isLoggedIn);

      if (!isLoggedIn && !publicPaths.includes(location.pathname)) {
        navigate("/login");
      }
    };

    checkLoggedInState();
  }, [location.pathname]);

  return (
    <>
      <Navbar loggedIn={loggedIn}/>
      <Outlet />
    </>
  );
}

export default App;
