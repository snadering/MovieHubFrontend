import { useNavigate } from "react-router-dom";
import dbFacade from "../facade/dbFacade";

function Logout() {
  const navigate = useNavigate();
  const token = dbFacade().getToken();

  dbFacade().logout(token);
  navigate("/login");
}

export default Logout;