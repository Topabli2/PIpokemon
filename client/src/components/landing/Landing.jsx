import { Link } from "react-router-dom";
import "./Landing.styles.css";

const Landing = () => {
  return (
    <div className="containeeeer">
      <img
        src="https://www.seekpng.com/png/full/1-15149_pokemon-logo-png-pokemon-go-logo-png.png"
        class="pokemon-logo"
        alt="Logo de Pokémon"
      ></img>
      <div className="content">
        <h1 className="title">¡Bienvenido! Ingresa para ver pokemons</h1>
        <button className="btn22">
          <Link to="/home" className="link22">
            ¡Vamos!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;
