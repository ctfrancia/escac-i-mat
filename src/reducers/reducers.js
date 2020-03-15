import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import pagesReducer from './pagesReducer';
import tournamentsReducer from './tournamentsReducer';

const appReducers = combineReducers({
  tournamentAction: tournamentsReducer,
  userAction: authorizationReducer,
  loading: pagesReducer
});

export default appReducers;
