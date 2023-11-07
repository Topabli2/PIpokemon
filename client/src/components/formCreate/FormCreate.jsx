import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import validate from "../../validate/validate";
import "./FormCreate.styles.css";

const Form = () => {
  const types = useSelector((state) => state.types);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const [aux, setAux] = useState("");

  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    healt: "",
    attack: "",
    defense: "",
    types: [],
    // dueño: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemon({
      ...pokemon,
      [name]: value,
    });
    setErrors(validate({ ...pokemon, [name]: value }));
  };

  const handleType = (event) => {
    if (!pokemon.types.includes(event.target.value)) {
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, event.target.value],
      });
      setAux(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      handleCreate();
    } else {
      alert("Por favor completa todos los campos");
      // O puedes manejar el error de alguna otra forma, como mostrando un mensaje de error en la interfaz de usuario
    }
  };

  const isFormValid = () => {
    return (
      pokemon.name !== "" &&
      pokemon.image !== "" &&
      pokemon.healt !== "" &&
      pokemon.attack !== "" &&
      pokemon.defense !== ""
      // && pokemon.dueño !== ""
    );
  };

  const handleCreate = async () => {
    try {
      const res = await dispatch(createPokemon(pokemon));
    } catch (error) {
      return error.message;
    }
  };
  console.log("soy el errors", errors);
  return (
    <div className="megaCont">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={pokemon.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            value={pokemon.image}
            onChange={handleChange}
          />
          {errors.image && <p>{errors.image}</p>}

          <label htmlFor="healt">Healt: </label>
          <input
            type="text"
            name="healt"
            value={pokemon.healt}
            onChange={handleChange}
          />
          {errors.healt && <p>{errors.healt}</p>}

          <label htmlFor="attack">Attack: </label>
          <input
            type="text"
            name="attack"
            value={pokemon.attack}
            onChange={handleChange}
          />
          {errors.attack && <p>{errors.attack}</p>}

          <label htmlFor="defense">Defense: </label>
          <input
            type="text"
            name="defense"
            value={pokemon.defense}
            onChange={handleChange}
          />
          {errors.defense && <p>{errors.defense}</p>}

          {/* <label htmlFor="dueño">Dueño </label>
          <input
            type="text"
            name="dueño"
            value={pokemon.dueño}
            onChange={handleChange}
          />
          {errors.dueño && <p>{errors.dueño}</p>} */}

          <label htmlFor="types">Types: </label>
          <select name="types" id="type" value={aux} onChange={handleType}>
            {types.map((el) => {
              console.log(types);
              return (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>

          <button className="btnCreate" onClick={handleCreate}>
            CREAR POKEMON
          </button>
        </form>
        <div>
          <button>
            <Link to="/home">Volver al Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
