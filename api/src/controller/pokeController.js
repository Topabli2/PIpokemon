const axios = require("axios");
const { Pokemons, Types } = require("../db");

// FUNCTION TO GET ALL INFORMATION FROM API
const getApiInfo = async () => {
  try {
    const apiURL = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50",
      { timeout: 100000 }
    );
    const pokeProm = [];
    apiURL.data.results.forEach((pkmn) => {
      pokeProm.push(axios.get(pkmn.url).then((res) => res.data));
    });
    const infoApi = Promise.all(pokeProm).then((response) =>
      response.map((pkmns) => {
        return {
          id: pkmns.id,
          name: pkmns.name,
          image: pkmns.sprites.other.home.front_default,
          healt: pkmns.stats[0].base_stat,
          attack: pkmns.stats[1].base_stat,
          defense: pkmns.stats[2].base_stat,
          types: pkmns.types.map((e) => {
            return { name: e.type.name };
          }),
        };
      })
    );
    return await infoApi;
  } catch (error) {
    return error.message;
  }
};

// FUNCTION TO GET ALL INFORMATION FROM DB
const getDbInfo = async () => {
  return await Pokemons.findAll({
    include: {
      model: Types,
      attributes: ["name"],
      through: {
        attributes: [], //al estar vacio no me muestra las relaciones
      },
    },
  });
};

// FUNCTION TO GET ALL INFORMATION TOGETHER
const getAllInfo = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoFinal = dbInfo.concat(apiInfo);
  return infoFinal;
};

//---------------------------------------------------------------------------------\\

//FUNCTION TO GET POKEMON BY ID IN API
const getPokeByIdApi = async (id) => {
  try {
    const apiURL = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      id: apiURL.data.id,
      name: apiURL.data.name,
      image: apiURL.data.sprites.other.home.front_default,
      healt: apiURL.data.stats[0].base_stat,
      attack: apiURL.data.stats[1].base_stat,
      defense: apiURL.data.stats[2].base_stat,
      types: apiURL.data.types.map((e) => {
        return { name: e.type.name };
      }),
    };
  } catch (error) {
    return { error: `Pokemon with id: ${id} not found` };
  }
};

//FUNCTION TO GET POKEMON BY ID IN DB
const getPokeByIdDb = async (id) => {
  try {
    const pkDb = await Pokemons.findByPk(id, {
      include: [
        {
          model: Types,
          attributes: ["name"],
        },
      ],
    });
    return pkDb;
  } catch (error) {
    return { error: error.message };
  }
};

//---------------------------------------------------------------------------------\\

module.exports = {
  getAllInfo,
  getPokeByIdApi,
  getPokeByIdDb,
};
