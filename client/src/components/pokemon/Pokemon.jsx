import { Link } from "react-router-dom";
import "./Pokemon.styles.css";
const Pokemon = ({ id, name, image, types, dueño }) => {
  return (
    <div className="Pk">
      <h2>{name}</h2>
      <h3> Tipos: {types.map((type) => type.name).join(" - ")}</h3>
      <Link to={`/detail/${id}`}>
        <img src={image} />
      </Link>
      <h3>{dueño}</h3>
    </div>
  );
};

export default Pokemon;
