import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAll } from "../../redux/actions";
import "./NavBar.styles.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const handlerReset = () => {
    dispatch(resetAll());
  };

  return (
    <div className="navBar">
      <Link to="/home" onClick={handlerReset}>
        <h3>HOME</h3>
      </Link>

      <Link to="/">
        <h3>LANDING</h3>
      </Link>

      <Link to="/create">
        <h3>CREATE ACTIVITY</h3>
      </Link>
    </div>
  );
};

export default NavBar;
