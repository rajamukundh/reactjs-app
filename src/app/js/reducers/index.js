import {combineReducers} from 'redux';
import PlayersReducer from './reducer-players';
import PlayerSelected from './reducer-player-selected';

const allReducers = combineReducers({
    players: PlayersReducer,
    selectPlayer : PlayerSelected
});

export default allReducers
