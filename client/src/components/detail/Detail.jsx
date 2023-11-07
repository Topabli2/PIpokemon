import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokeById, cleanDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./Detail.styles.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokeDetail = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokeById(id));
    return () => dispatch(cleanDetail());
  }, [id]);
  console.log("detail", pokeDetail);
  return (
    <div className="containerDetail">
      <div className="card">
        <h1>Nombre: {pokeDetail.name}</h1>
        <img src={pokeDetail.image} />
        <h2>
          Tipos: {pokeDetail?.types?.map((type) => type.name).join(" - ")}
        </h2>
        <h2>Ataque: {pokeDetail.attack}</h2>
        <h2>Defensa: {pokeDetail.defense}</h2>
        <h2>Vida: {pokeDetail.healt}</h2>
        {pokeDetail.dueño && <h2>Dueño: {pokeDetail.dueño}</h2>}
        <button className="btn">
          <Link to="/home">Volver al Home</Link>
        </button>
        {/* <button className="btnDelete" onClick={handleDelete}>
          ELIMINAR POKEMON
        </button> */}
      </div>
    </div>
  );
};

export default Detail;
