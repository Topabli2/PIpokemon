const typeHandler = require("../controller/controlTypes.js");

const getTypes = async (req, res) => {
  try {
    const typesInDb = await typeHandler();
    return res.status(200).json(typesInDb);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = getTypes;
