import { useNavigate } from "react-router-dom";
import dbFacade from "../facade/dbFacade";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = dbFacade().getToken();

    dbFacade().logout(token);
    navigate("/login");
  }, []);

  return (
    <>
      <p>Logout</p>
    </>
  );
}

export default Logout;