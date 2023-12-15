import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import dbFacade from "./facade/dbFacade"
import { useEffect } from "react";


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = dbFacade().getToken();
    if (
      !token &&
      (location.pathname != "/" &&
        location.pathname != "/login" &&
        location.pathname != "/signup")
    ) {
      console.log(token);
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
