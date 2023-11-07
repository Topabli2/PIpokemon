import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pokemon from "../pokemon/Pokemon";
import { handler } from "../../helpers/filtersAndSorts";
import { setPage } from "../../redux/actions";
import "./Pokemons.styles.css";

export default function Pokemons() {
  const { pokemons, sort, filterOrigin, filterType, pages } = useSelector(
    (state) => state
  );
  const [allPokemons, setAllPokemons] = useState([...pokemons]);
  const dispatch = useDispatch();
  //pages
  const nextPage = () => {
    dispatch(setPage(pages + 1));
  };

  const previousPage = () => {
    dispatch(setPage(Math.max(pages - 1, 0)));
  };

  const num = 12;
  const start = pages * num;
  const end = start + num;
  const totalPages = Math.ceil(allPokemons.length / num);
  //
  useEffect(() => {
    const filtered = handler(sort, filterOrigin, filterType, pokemons);
    setAllPokemons(filtered);
  }, [pokemons, sort, filterOrigin, filterType]);

  return (
    <div className="Pks">
      {allPokemons.slice(start, end).map((pkmn, i) => {
        return (
          <Pokemon
            key={i}
            id={pkmn.id}
            name={pkmn.name}
            types={pkmn.types}
            image={pkmn.image}
            dueño={pkmn.dueño}
          />
        );
      })}
      <div className="btn-cont">
        <button onClick={previousPage} disabled={pages === 0}>
          Atras
        </button>
        <h3>Page: {pages + 1}</h3>
        <button onClick={nextPage} disabled={pages === totalPages - 1}>
          Adelante
        </button>
      </div>
    </div>
  );
}
