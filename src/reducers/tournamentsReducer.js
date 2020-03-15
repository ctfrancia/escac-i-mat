const defaultState = {
  tournaments: []
};

const tournamentsReducer = (state = defaultState.tournaments, action) => {
  switch (action.type) {
    case 'ADD_NEW_TOURNAMENT':
      return [...state, action.tournaments];

    case 'FETCH_TOURNAMENT_LIST':
      return [...state, ...action.tournaments];

    case 'UPDATE_TOURNAMENT_LIST':
      return [...state, action.tournaments];

      case 'REMOVE_TOURNAMENT':
      console.log('REMOVE TOURNAMENT REDUCER',action.tournament.id);
      console.log('STATE', state[0].data);
      const arr = state[0].data;
      console.log('ARR CONST', arr);


      const newState = arr.filter(tournament => tournament.id !== action.tournament.id);
      return [...newState, action.tournaments ]
      // return {
      //   // ...state,
      //   // tournaments: [...newState]
      // }
      // console.log(' STATE FILTER TOURNAMENT',tournament) );

        // log tournament.id !== action.tournament.id);

    default:
      return state;
  }
};
export default tournamentsReducer;
