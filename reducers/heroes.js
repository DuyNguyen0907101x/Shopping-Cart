import { fromJS } from 'immutable';

import {
  SAVE_QUERY_HERO_NAME, RECEIVE_HEROES_SUCCESS
} from '../actions/heroes';

const initialState = fromJS({
  heroes: [],
  queryHeroName: ''
});

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_QUERY_HERO_NAME:
      return state.set('queryHeroName', action.name);
    case RECEIVE_HEROES_SUCCESS:
      return state.set('heroes', action.heroes);
    default:
      return state;
  }
};

export default heroesReducer;
