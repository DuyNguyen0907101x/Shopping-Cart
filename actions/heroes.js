export const SAVE_QUERY_HERO_NAME = 'SAVE_QUERY_HERO_NAME';
export const GET_HEROES = 'GET_HEROES';
export const RECEIVE_HEROES_SUCCESS = 'RECEIVE_HEROES_SUCCESS';

export const saveHeroName = (name) => {
  return {
    type: SAVE_QUERY_HERO_NAME,
    name
  }
};

export const getHeroes = () => {
  return {
    type: GET_HEROES
  };
};

export const receiveHeroesSuccess = (heroes) => {
  return {
    type: RECEIVE_HEROES_SUCCESS,
    heroes
  }
};
