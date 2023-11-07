const { Types } = require("../db");
const axios = require("axios");

const typeHandler = async () => {
  try {
    const requestTypesFromApi = await axios("https://pokeapi.co/api/v2/type");
    const typesFromApi = requestTypesFromApi.data.results;
    for (let type of typesFromApi) {
      await Types.findOrCreate({
        where: { name: type.name },
      });
    }
    const allTypes = await Types.findAll();
    return allTypes;
  } catch (error) {
    return error.message;
  }
};

module.exports = typeHandler;
