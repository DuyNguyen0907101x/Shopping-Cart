import { createSelector } from 'reselect';

/* Hero Search App */
export const selectHeroes = (state) => state.get('heroesReducer');

export const selectAllHeroes = createSelector(
  selectHeroes,
  heroes => heroes.get('heroes')
);

export const selectQueryHeroName = createSelector(
  selectHeroes,
  heroes => heroes.get('queryHeroName')
);

export const selectQueryHeroes = createSelector(
  [ selectAllHeroes, selectQueryHeroName ],
  (heroes, queryHeroName) => heroes
    .filter(hero => hero
      .toLowerCase()
      .indexOf(queryHeroName.toLowerCase()) !== -1
    )
);

// export const selectHeroes = (state) => state.getIn(['heroesReducer', 'heroes']);
//
// export const selectQueryHeroName = (state) => state.getIn(['heroesReducer', 'queryHeroName']);
//
// export const getQueryHeroName = createSelector(
//   selectQueryHeroName,
//   queryHeroName => queryHeroName
// );
//
// export const getQueryHeroes = createSelector(
//   [ selectHeroes, selectQueryHeroName ],
//   (heroes, queryHeroName) => heroes.
//     filter(hero => hero
//       .toLowerCase()
//       .indexOf(queryHeroName.toLowerCase()) !== -1)
// );
