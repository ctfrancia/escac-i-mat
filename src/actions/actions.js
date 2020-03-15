
//I think this will be ok, store the tournament as an object.
export const addNewTournament = tournament => ({
  type: 'ADD_NEW_TOURNAMENT',
  tournament,
});

export const removeTournament = (tournament) => ({
  type: 'REMOVE_TOURNAMENT',
  tournament,
});

//argument is getting passed as an full payload object
export const updateTournamentList = (tournaments) => (
  //it's being reveived here
  // console.log('UDPATE TOURNAMENT ACTION',tournaments),
{
  type: 'UPDATE_TOURNAMENT_LIST',
  tournaments,
});

export const fetchTournamentList = () => ({
  type: 'FETCH_TOURNAMENT_LIST'
});

export const noVisibility = () => ({
  type: 'NOT_VISIBLE'

});

export const yesVisibility = () => ({
  type: 'IS_VISIBLE'
});
