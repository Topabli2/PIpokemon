import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import SearchBar from "../searchBar/SearchBar";
import Pokemons from "../pokemons/Pokemons";
import Sort from "../sort/Sort";
import Filters from "../filters/Filters";
import { Link } from "react-router-dom";
import "./Home.styles.css";
// import NavBar from "../navBar/NavBar";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, []);

  return (
    <div className="Container">
      <SearchBar />
      <Sort />
      <Filters />
      <hr />
      <h1 className="Titulo">POKEMONS:</h1>
      <Pokemons />
    </div>
  );
}
