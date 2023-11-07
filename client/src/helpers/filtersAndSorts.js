export const handler = (sort, filterOrigin, filterType, pokemons) => {
  let info = [...pokemons];
  if (sort === "A-Z") {
    info.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "Z-A") {
    info.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sort === "M") {
    info.sort((a, b) => a.attack - b.attack);
  }
  if (sort === "m") {
    info.sort((a, b) => b.attack - a.attack);
  }
  if (filterOrigin === "Db") {
    info = info.filter((el) => {
      return el.hasOwnProperty("createdInDb");
    });
  }
  if (filterOrigin === "Api") {
    info = info.filter((el) => {
      return typeof el.id === "number";
    });
  }
  if (filterType !== "") {
    info = info.filter((el) => {
      return el.types.some((type) => type.name === filterType);
    });
  }
  return info;
};
