import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import dbFacade from "./facade/dbFacade"
import { useEffect } from "react";

const publicPaths = [
  '/',
  '/login',
  '/signup',
]

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = dbFacade().getToken();
    if (!token && !publicPaths.includes(location.pathname)) {
      navigate("/login");
    }
  }, [location.pathname]);

  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default App
