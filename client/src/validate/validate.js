const validate = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "Must have name";
  } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
    errors.name = "Must only have letters and spaces";
  } else if (!data.image) {
    errors.image = "Must have image";
  } else if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(data.image)) {
    errors.image = "image must be necesary";
  } else if (!data.healt) {
    errors.healt = "Must have Health";
  } else if (!/^(1000|[1-9][0-9]{0,2}|0)$/.test(data.healt)) {
    errors.healt = "Health must be between 0 and 1000";
  } else if (!data.attack) {
    errors.attack = "Must have Attack";
  } else if (!/^(1000|[1-9][0-9]{0,2}|0)$/.test(data.attack)) {
    errors.attack = "Attack must be between 0 and 1000";
  } else if (!data.defense) {
    errors.defense = "Must have Defense";
  } else if (!/^(1000|[1-9][0-9]{0,2}|0)$/.test(data.defense)) {
    errors.defense = "Defense must be between 0 and 1000";
  } else if (!data.dueño) {
    errors.dueño = "Must have owner";
  } else if (!/^[A-Za-z\s]+$/.test(data.dueño)) {
    errors.dueño = "Must only have letters and spaces";
  }
  return errors;
};

export default validate;
