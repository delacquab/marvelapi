const TIMESTAMP = "1581786955";
const API_KEY = "0980a4fc9d9d1ae60fc9c0274173e8e2";
const MD5 = "7722310b6d4d96fb2e461479019cd2be";

const URL = `http://gateway.marvel.com/v1/public/characters?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${MD5}`;

export const getCharacters = () => {
  return fetch(URL).then(r => r.json());
};

export const getCharactersName = name => {
  return fetch(`${URL}&nameStartsWith=${name}`).then(r => r.json());
};
