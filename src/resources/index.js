
const BASE_URL = 'https://swapi.co/api';

const httpGET = (url) => fetch(url).then(response => response.json());

export const getEntities = (category, page) => httpGET(`${BASE_URL}/${category}?page=${page}`);
export const fetchUrl = (url) => httpGET(url);

export const getPlanets = (page) => httpGET(`${PLANETS_URL}/?page=${page}`);
